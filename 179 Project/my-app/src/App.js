import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Bavaria from "./Bavaria"
<<<<<<< Updated upstream
import JaneHopkinsLogIn from './JaneHopkinsLogIn';
import Login from './Login';
import FDAHome from './FDAHome';

=======
import Login from "./Login";
import FDADash from "./FDAView/FDADash"
import FDASearch from "./FDAView/FDASearch"
import FDAResults from "./FDAView/FDAResults"
import FDANew from "./FDAView/FDANew"
import FDAOngoing from "./FDAView/FDAOngoing"
import FDAFinish from "./FDAView/FDAFinish";
>>>>>>> Stashed changes

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bavaria" element={<Bavaria />} />
<<<<<<< Updated upstream
          <Route path="Login" element={<Login />} />
          <Route path="FDAHome" element={<FDAHome />} /> 
=======
          <Route path="Login" element = {<Login />} />
>>>>>>> Stashed changes
        </Route>

      </Routes>
    </BrowserRouter>
  );

}

export default App;
