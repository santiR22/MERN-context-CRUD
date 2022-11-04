import axios from "axios";
import {
  create_post,
  delete_post,
  get_post,
  get_posts,
  update_post,
} from "../env/env";

export const getPostsRequests = async () => await axios.get(get_posts);

export const getPostRequest = async (id) => await axios.get(get_post + id);

export const deletePostRequest = async (id) =>
  await axios.delete(delete_post + id);

export const createPostRequests = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }
  return await axios.post(create_post, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  const form = new FormData();

  for (let key in newPostFields) {
    form.append(key, newPostFields[key]);
  }
  return await axios.put(update_post + id, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
