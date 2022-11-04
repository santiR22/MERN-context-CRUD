import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBIcon,
  MDBRow,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { SaveBtn } from "../components/buttons/SaveBtn";
import { LoadingBtn } from "../components/buttons/LoadingBtn";

export const Post = () => {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getPost(params.id);
        setPost(data);
      }
    })();
  }, [params.id]);

  return (
    <div>
      <Formik
        initialValues={post}
        validationSchema={yup.object({
          title: yup.string().required("Se require un titulo."),
          description: yup.string().required("Se require una descripcion."),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePost(params.id, values);
          } else {
            await createPost(values);
          }
          actions.setSubmitting(false);
          navigate("/");
        }}
        enableReinitialize={true}
      >
        {({ handleSubmit, setFieldValue, isSubmitting }) => (
          <MDBContainer className='mt-5'>
            <Form onSubmit={handleSubmit}>
              <MDBRow center>
                <MDBCol xs={8} xl={6} lg={8} sm={12} md={10}>
                  <MDBCard className='bg-dark' border='black' shadow='5'>
                    {/* Titulo... */}
                    <MDBCardBody>
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Titulo
                        </MDBCardTitle>
                        <Field
                          name='title'
                          className='form-control'
                          placeholder='añada un titulo...'
                        />
                        <ErrorMessage
                          component='p'
                          name='title'
                          className='text-danger'
                        />
                      </div>

                      {/* Descripcion... */}
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Descripcion
                        </MDBCardTitle>
                        <Field
                          name='description'
                          className='form-control'
                          placeholder='añada una descripcion...'
                          component='textarea'
                          rows={3}
                        />
                        <ErrorMessage
                          component='p'
                          name='description'
                          className='text-danger'
                        />
                      </div>

                      {/* Imagen (opcional)... */}
                      <div className='mb-3'>
                        <MDBCardTitle className='text-white'>
                          Imagen
                        </MDBCardTitle>
                        <MDBFile
                          name='image'
                          onChange={(e) =>
                            setFieldValue("image", e.target.files[0])
                          }
                        />
                      </div>

                      {/* submit buttons... */}
                      <div className='text-end'>
                        <MDBBtn
                          color='danger'
                          className='me-2'
                          onClick={() => navigate("/")}
                        >
                          cancelar <MDBIcon fas icon='times' className='mx-1' />
                        </MDBBtn>
                        <MDBBtn
                          type='submit'
                          color='success'
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? <LoadingBtn /> : <SaveBtn />}
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </Form>
          </MDBContainer>
        )}
      </Formik>
    </div>
  );
};
