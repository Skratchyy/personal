import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './views/Home';
import Header from "./layout/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}