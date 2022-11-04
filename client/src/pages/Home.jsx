import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { PostCard } from "../components/PostCard";
import { usePosts } from "../context/PostContext";

export const Home = () => {
  const { post } = usePosts();

  const renderMain = () => {
    if (post.length === 0) {
      return (
        <h3 className='text-black text-center mt-5'>
          No se ha encontrado ninguna publicacion &#x1F610;
        </h3>
      );
    }

    return <PostCard posts={post} />;
  };

  return (
    <MDBContainer className='mt-2 w-auto'>
      <h2 className='text-center text-black mb-3'>
        Publicaciones actuales: {post.length}
      </h2>
      <MDBRow>{renderMain()}</MDBRow>
    </MDBContainer>
  );
};
