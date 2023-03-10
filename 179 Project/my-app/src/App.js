import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FDALayout from "./FDAView/FDALayout";
import Home from "./Home";
import Bavaria from "./Bavaria"
import FDADash from "./FDAView/FDADash"
import FDASearch from "./FDAView/FDASearch"
import FDAResults from "./FDAView/FDAResults"
import FDANew from "./FDAView/FDANew"
import FDAOngoing from "./FDAView/FDAOngoing"
import FDAFinish from "./FDAView/FDAFinish";

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bavaria" element={<Bavaria />} />
        </Route>
        <Route path="/FDAView" element={<FDALayout />}>  
          <Route path="FDADash" element={<FDADash />} />
          <Route path="FDASearch" element={<FDASearch />} />
          <Route path="FDAResults" element={<FDAResults />} />
          <Route path="FDANew" element={<FDANew />} />
          <Route path="FDAOngoing" element={<FDAOngoing />} />
          <Route path="FDAFinish" element={<FDAFinish />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
