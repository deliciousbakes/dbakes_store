/** @format */

"use client";
import { SubmitButton } from "@/components/backend/Buttons";
import FormInput from "@/components/backend/FormInput";
import { createCategoryRHF, State } from "@/utils/actions";
import { CategorySchema } from "@/utils/schemas";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FieldErrors, FieldPath, useForm, UseFormRegister } from "react-hook-form";

// Interface for our form values that drastically improves type safety for our form
export interface FormValues {
  description: string;
  title: string;
  // slug: string;
}

const  FormContent=({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  isValid: boolean;
  errors: FieldErrors<FormValues>;
})=> {
  const { pending } = useFormStatus();

  return (
    <>
      <FormInput
        {...register("title")}
        placeholder="title"
        name="title"
        type="text"
      />
      <div className="text-red-800 mb-6">
        <ErrorMessage name="title" errors={errors} />
      </div>
      <FormInput
        {...register("description")}
        placeholder="Description"
        name="descrription"
        type="text"
      />
      <div className="text-red-800">
      <ErrorMessage name="description" errors={errors} />
      </div>
      <SubmitButton
        title="Create category"
        LoadingTitle="Creating category..."
        className="mt-6"
      />
      {/* {pending && <span>Loading...</span>} */}
    </>
  );
}


 const  Form=()=> {
  const [state, formAction] = useFormState<State, FormData>(
    createCategoryRHF,
    null
  );

  const {
    register,
    formState: { isValid, errors },
    setError,
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(CategorySchema),
  });;
 useEffect(() => {
   if (!state) {
     return;
   }
   // In case our form action returns `error` we can now `setError`s
   if (state.status === "error") {
     state.errors?.forEach((error) => {
       setError(error.path as FieldPath<FormValues>, {
         message: error.message,
       });
     });
   }
   if (state.status === "success") {
     alert(state.message);
   }
 }, [state, setError]);
console.log({errors})
console.log({ state });
  return (
    <form action={formAction}>
      <FormContent register={register} isValid={isValid} errors={errors} />
    </form>
  );
}

export default Form