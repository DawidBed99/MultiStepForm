import "./styles.css";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Stepper from "./components/Stepper/Stepper";
import AddOns from "./components/AddOns/AddOns";
import Finish from "./components/Finish/Finish";
import Thanks from "./components/Thanks/Thanks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/MultiStepForm">
        <div className="container">
          <Stepper />
          <Routes>
            <Route path="/" element={<PersonalInfo />}></Route>
            <Route path="/selectPlan" element={<SelectPlan />}></Route>
            <Route path="/addOns" element={<AddOns />}></Route>
            <Route path="/finish" element={<Finish />}></Route>
            <Route path="/thanks" element={<Thanks />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
