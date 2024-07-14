import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./views/Home";
import Header from "./layout/Header";
import Work from "./views/Work";
import About from "./views/About";
import Contacts from "./views/Contacts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
