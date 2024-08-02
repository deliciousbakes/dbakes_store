
"use client"


// export type actionStateProps = {
//   message: string;
//   path:string
// }


export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise< typeof prevState>;


