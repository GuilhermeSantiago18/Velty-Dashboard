import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="*"  element={<Navigate to={'/'} />}/>
    </Routes>
  );
}

export default App;
