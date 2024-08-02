'use client';

import { actionFunction } from '@/utils/types';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useToast } from '../ui/use-toast';

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] >;
  timestamp: number;
};

export const EMPTY_FORM_STATE: FormState = {
  status: "UNSET" as const,
  message: "",
  fieldErrors: {},
  timestamp: Date.now(),
};
function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, EMPTY_FORM_STATE);
 const { toast } = useToast();

 useEffect(() => {
   if (state.message) {
     console.log(state);
     toast({ description: state.message});
   }
 }, [state, toast]);

  return (
    <form action={formAction} className="form w-full h-screen">
      {children}
    </form>
);
}
export default FormContainer;