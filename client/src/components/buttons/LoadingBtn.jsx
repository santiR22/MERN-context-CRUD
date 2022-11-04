import { MDBSpinner } from "mdb-react-ui-kit";
import React from "react";

export const LoadingBtn = () => {
  return (
    <>
      <MDBSpinner grow size='sm' role='status' tag='span' className='me-2' />{" "}
      guardando...
    </>
  );
};
