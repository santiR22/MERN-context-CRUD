import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Post } from "../pages/Post";

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<Post />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
