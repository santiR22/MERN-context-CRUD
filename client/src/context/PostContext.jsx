import { createContext, useContext, useEffect, useState } from "react";
import {
  createPostRequests,
  deletePostRequest,
  getPostRequest,
  getPostsRequests,
  updatePostRequest,
} from "../api/post";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  //Mostrar posts...
  const getPosts = async () => {
    const res = await getPostsRequests();
    setPost(res.data);
  };

  //Crear posts...
  const createPost = async (posting) => {
    try {
      const res = await createPostRequests(posting);
      setPost([...post, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar posts...
  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPost(post.filter((item) => item._id !== id));
    }
  };

  const getPost = async (id) => {
    try {
      const res = await getPostRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, newPost) => {
    try {
      const res = await updatePostRequest(id, newPost);
      setPost(post.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const values = {
    post,
    setPost,
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost,
  };
  return <postContext.Provider value={values}>{children}</postContext.Provider>;
};
