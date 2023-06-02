import { Route, Routes } from "react-router-dom";
import {
  Admin,
  AllTeachers,
  Home,
  Login,
  Student,
  Teacher,
} from "./Pages/index.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/student' element={<Student />} />
        <Route path='/allTeachers' element={<AllTeachers />} />
      </Routes>
    </div>
  );
};

export default App;
