import { Navigation } from "./components/Navigation";
import { Routing } from "./components/Routing";
import { PostProvider } from "./context/PostContext";
import "./index.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <PostProvider>
      <Navigation />
      <Routing />
      <Toaster />
    </PostProvider>
  );
};

export default App;
