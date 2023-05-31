import { Route, Routes } from "react-router-dom";
import { Admin, Home, Login, Student, Teacher } from "./Pages/index.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/student' element={<Student />} />
      </Routes>
    </div>
  );
};

export default App;
