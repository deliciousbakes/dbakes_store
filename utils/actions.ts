/** @format */
"use server";

import { toast } from "@/components/ui/use-toast";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import db from "../lib/db";
import { PdtSchema, PdtSchemaType, validateWithZodSchema } from "./schemas";


const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};


const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  if (!user?.privateMetadata) redirect("profile/create");
  return user;
};



export const createPdt = async (data: PdtSchemaType) => {
   const result = PdtSchema.safeParse(data);
  try {
    await db.product.create({ data });
    
    if (result.success) {
      return toast({description: "Product Created successfully!"})
    };
  } catch (error) {
    return renderError(error);

    // return {
    //   error: "SERVER ERROR",
    // };
  }
  // revalidatePath("/");
}


export const createProduct = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(PdtSchema, rawData);
    await db.product.create({
      data: {
        ...validatedFields,
      },
    });
    return {
      status: "success",
      message: `Product Created successfully!`,
    };
  } catch (error) {
    return renderError(error)
   
  }
};

// export const UpdateProduct = async (
//   prevState: State,
//   formData: FormData,
//   id: string
// ) => {
//   try {
//     const rawData = Object.fromEntries(formData);
//     const validatedFields = validateWithZodSchema(ProductSchema, rawData);

//     await db.Product.update({
//       where: { id },
//       data: {
//         ...validatedFields,
//       },
//     });
//     return { message: "Product updated successfully" };
//   } catch (error) {
//     return renderError(error);
//   }
// };

// export const fetchCategories = () => {
//   return db.Product.findMany({});
// };

// export const fetchProductById = (id: string) => {
//   return db.Product.findUnique({
//     where: { id },
//   });
// };

// export const createProductRHF = async (
//   _prevState: State | null,
//   formData: FormData
// ): Promise<State> => {
//   try {
//     const rawData = Object.fromEntries(formData);
//     const validatedFields = validateWithZodSchema(ProductSchema, rawData);

//     await db.Product.create({
//       data: {
//         ...validatedFields,
//       },
//     });
//     return {
//       status: "success",
//       message: `Product Created successfully!`,
//     };
//   } catch (e) {
//     // In case of a ZodError (caused by our validation) we're adding issues to our response
//     if (e instanceof ZodError) {
//       return {
//         status: "error",
//         message: "Invalid form data",
//         errors: e.issues.map((issue) => ({
//           path: issue.path.join("."),
//           message: `Server validation: ${issue.message}`,
//         })),
//       };
//     }
//     return {
//       status: "error",
//       message: "Something went wrong. Please try again.",
//     };
//   }
// };

// export const createUserRHF = async (
//   prevState: State | null,
//   formData: FormData
// ): Promise<State> => {
//   try {
//     const rawData = Object.fromEntries(formData);
//     const validatedFields = validateWithZodSchema(UserSchema, rawData);

//     if (!validatedFields.success) {
//       return {
//         ...prevState,
//         zodErrors: result.error.flatten().fieldErrors,
//         message: "Missisng fields Failed to register",
//       };
//     }
//     return {
//       ...prevState,
//       data: result?.data,
//     };
//     await db.user.create({
//       data: {
//         ...validatedFields,
//       },
//     });
//     return {
//       status: "success",
//       message: `Product Created successfully!`,
//     };
//   } catch (e) {
//     // In case of a ZodError (caused by our validation) we're adding issues to our response
//     if (e instanceof ZodError) {
//       return {
//         status: "error",
//         message: "Invalid form data",
//         errors: e.issues.map((issue) => ({
//           path: issue.path.join("."),
//           message: `Server validation: ${issue.message}`,
//         })),
//       };
//     }
//     return {
//       status: "error",
//       message: "Something went wrong. Please try again.",
//     };
//   }
// };

            // export function validateWithZodSchema<T>(
            //   schema: ZodSchema<T>,
            //   data: unknown
            // ): T {
            //   const result = schema.safeParse(data);

            //   if (!result.success) {
            //     const errors = result.error.errors.map((error) => error.message);
            //     throw new Error(errors.join(","));
            //   }
            //   return result.data;
            // }
