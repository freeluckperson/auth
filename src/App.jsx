import {
  Navbar,
  Register,
  Home,
  Login,
  Tasks,
  AddTask,
  Profile,
  ProtectedRoutes,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add-task" element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
