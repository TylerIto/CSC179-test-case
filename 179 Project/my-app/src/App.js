import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Bavaria from "./Bavaria"

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bavaria" element={<Bavaria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
