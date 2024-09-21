// lié au routeur :
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// toutes les pages :
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";
import Post from "./components/pages/Post/Post";

// fichier racine indiquant les parties "fixes" d'une page (header et footer)
import Root from "./components/pages/Root/Root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post/:id" element={<Post />} />
        </Route>
    )
);

export default router;
