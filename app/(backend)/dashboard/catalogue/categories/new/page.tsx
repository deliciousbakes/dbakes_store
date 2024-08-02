/** @format */
"use server"
import { SubmitButton } from "@/components/backend/Buttons";
import FormContainer from "@/components/backend/FormContainer";
import { FormInput } from "@/components/backend/FormInput";
import TextAreaInputField from "@/components/backend/TextAreatInputField";
import TextAreaInput from "@/components/backend/TextAreatInputField";
import { createProduct } from "@/utils/actions";




async function CreateProfilePage() {

  return (
    <section className="bg-emerald-900  dark:bg-cyan-950">
      <h1 className="text-2xl font-semibold mb-8 capitalize"> new Category</h1>
      <div className="border p-9 rounded-md bg-muted">
        <FormContainer action={createProduct}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="title" label="Title" />
            <FormInput type="text" name="slug" label="Slug" />
           
          </div>
          <div className="mt-4 flex justify-center">
            <SubmitButton
              title="Create Category"
              LoadingTitle="Creating Category..."
              className="bg-jade"
            />
          </div>
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfilePage;
