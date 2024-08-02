
"use client"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

export const  FormInput=(props: FormInputProps)=> {
  const { label, name, type, defaultValue, placeholder } = props;
  
  return (
    <div className="mb-2 ">
      <Label
        htmlFor={name}
        className="capitalize mb-5 text-justify text-xl text-blue-900 dark:text-white"
      >
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        // className='bg-slate-400'
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      
    </div>
  );
}
