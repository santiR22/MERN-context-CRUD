import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import toast from "react-hot-toast";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ posts }) => {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className={`${t.visible ? "animate-enter" : "animate-leave"}`}>
          <p className='text-white'>Deseas eliminar esta publicacion?</p>
          <div className='text-center'>
            <MDBBtn
              className='me-2'
              color='success'
              onClick={() => toast.dismiss(t.id)}
            >
              Cancelar
            </MDBBtn>
            <MDBBtn
              color='danger'
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Eliminar
            </MDBBtn>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
        position: "top-right",
      }
    );
  };

  return (
    <>
      {posts.map((item) => (
        <MDBCol xs={8} md={6} xl={3} lg={4} key={item._id} className='mb-3'>
          <MDBCard className='md-4 text-black' border='black' shadow='5'>
            {item.image && (
              <MDBCardImage
                style={{ borderBottom: "2px solid black" }}
                position='top'
                height="200"
                alt='img'
                src={item.image.url}
              />
            )}
            <MDBCardBody>
              <MDBCardTitle>{item.title}</MDBCardTitle>
              <MDBCardText>{item.description}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter
              className='d-flex justify-content-center'
              border='black'
            >
              <MDBBtn
                className='me-2'
                color='warning'
                onClick={() => navigate(`/post/${item._id}`)}
              >
                editar
              </MDBBtn>
              <MDBBtn
                color='danger'
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item._id);
                }}
              >
                eliminar
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </>
  );
};
