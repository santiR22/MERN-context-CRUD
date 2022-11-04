import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='black'>
      <MDBContainer className='d-flex justify-content-center'>
        <MDBBtn tag={Link} to='/' className='me-2'>
          <MDBIcon fas icon='home' className='mx-1' />
          inicio
        </MDBBtn>
        <MDBBtn tag={Link} to='/new' style={{ backgroundColor: "#E65100" }}>
          crear publicacion
          <MDBIcon far icon='edit' className='mx-1' />
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};
