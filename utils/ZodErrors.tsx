

type errorType = {
    message: "";
    path: ""
};


export const ZodErrors = ({ error }: { error: string[] }) => {
    if (!error) return null;
    
  return error.map((err, index: number) => (
    <div key={index} className="text-pink-700 text-sm italic mt-1   py-2 ">
      {err}
    </div>
  ));
};

//  const errorMessage = generateErrorMessage(result.error.issues, options);
//  throw new Error(errorMessage);