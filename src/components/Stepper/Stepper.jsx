import App from "../../App.css";
import stepsImg from "../../images/bg-sidebar-desktop.svg";
import stepsImgMobile from "../../images/bg-sidebar-mobile.svg";

import useFormContext from "../../hooks/useFormContext";
import { useEffect, useState } from "react";
export default function Stepper() {
  const { page } = useFormContext();
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <div className="stepsContainer">
      <img alt="" src={screenSize.width > 400 ? stepsImg : stepsImgMobile}></img>
      <div className="stepsElements">
        <div className="step">
          <button className={`stepNumber  ${page === 0 ? "active" : ""}`}>
            1
          </button>
          <div className="stepInfo">
            <p className="numberOfStep">STEP 1</p>
            <p className="singleStepInfo">
              <strong>YOUR INFO</strong>
            </p>
          </div>
        </div>
        <div className="step">
          <div className={`stepNumber  ${page === 1 ? "active" : ""}`}>2</div>
          <div className="stepInfo">
            <p className="numberOfStep">STEP 2</p>
            <p className="singleStepInfo">
              <strong>SELECT PLAN</strong>
            </p>
          </div>
        </div>
        <div className="step">
          <div className={`stepNumber  ${page === 2 ? "active" : ""}`}>3</div>
          <div className="stepInfo">
            <p className="numberOfStep">STEP 3</p>
            <p className="singleStepInfo">
              <strong>ADD-ONS</strong>
            </p>
          </div>
        </div>
        <div className="step">
          <div className={`stepNumber  ${page === 3 ? "active" : ""}`}>4</div>
          <div className="stepInfo">
            <p className="numberOfStep">STEP 4</p>
            <p className="singleStepInfo">
              <strong>SUMMARY</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
