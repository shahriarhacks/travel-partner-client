import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes/routes";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
