"use client"
import { SubmitButton } from "@/components/backend/Buttons"
import { FormInputField } from "@/components/backend/FormInputField"
import TextAreaInputField from "@/components/backend/TextAreatInputField"
import { Form } from "@/components/ui/form"
import { createPdt } from "@/utils/actions"
import { PdtSchema, PdtSchemaType } from "@/utils/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"



export default function Home() {
  const form = useForm<z.infer<typeof PdtSchema>>({
    resolver: zodResolver(PdtSchema),
    defaultValues: {
      name: "",
      title: "",
      costPrice: 0,
      sellingPrice: 0,
      category: "",
      description: "",
    },
  });
 const onSubmit = async (data: PdtSchemaType) => {
   const response = await createPdt(data);
   console.log(response);
    // if (response?.Success) {
    //   toast.error(response.error);
    // } else {
    //   toast.success("Product Created successfully!");
    //   reset();
    // }
 };

  return (
    <main className="form  h-screen flex justify-center flex-col sm:longForm  items-center ">
      <h1 className="text-2xl  bg-slate-500  rounded-md px-8 py-3">
        New product
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="container grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1  gap-4 "
        >
          <FormInputField
            name="name"
            control={form.control}
            label="Name"
            type="text"
            placeholder="Enter Product Name"
          />
          <FormInputField
            name="title"
            control={form.control}
            label="Title"
            type="text"
            placeholder="Enter Product Title"
          />

          <FormInputField
            name="category"
            control={form.control}
            label="Category"
            type="text"
            placeholder="Enter category"
          />
          <FormInputField
            name="costPrice"
            control={form.control}
            label="Cost Price"
            type="number"
            placeholder="Enter cost price"
          />
          <FormInputField
            name="sellingPrice"
            control={form.control}
            label="Selling Price"
            type="number"
            placeholder="Enter selling price"
          />
          <TextAreaInputField
            name="description"
            control={form.control}
            label="Product description"
            placeholder="Enter  product description"
          />
          <SubmitButton
            title="Create Product"
            LoadingTitle="Creating product..."
            className="text-2xl bg-jade hover:bg-emerald-600"
          />
        </form>
      </Form>
    </main>
  );
}

