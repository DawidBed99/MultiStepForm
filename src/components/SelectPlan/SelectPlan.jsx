import "./SelectPlan.css";
import advanced from "../../images/icon-advanced.svg";
import arcade from "../../images/icon-arcade.svg";
import pro from "../../images/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFormContext from "../../hooks/useFormContext";
export default function SelectPlan() {
  const navigate = useNavigate();
  const { page, setPage, data, handleChange, checkedTime, setCheckedTime } =
    useFormContext();

  const [activeBTN1, setActiveBTN1] = useState(
    data.plan === "Arcade" ? true : false,
  );
  const [activeBTN2, setActiveBTN2] = useState(
    data.plan === "Advanced" ? true : false,
  );
  const [activeBTN3, setActiveBTN3] = useState(
    data.plan === "Pro" ? true : false,
  );

  return (
    <div className="formContainerSelect">
      <h1>Select Plan </h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="selectBTNContainer">
        <label
          onClick={() => {
            setActiveBTN1(true);
            setActiveBTN2(false);
            setActiveBTN3(false);
          }}
          className={`selectPlanBTN ${activeBTN1 ? "clicked" : ""}`}
        >
          <input
            required
            id="arcade"
            value={"Arcade"}
            onChange={handleChange}
            name="plan"
            type="checkbox"
          ></input>
          <img src={arcade}
          alt=""
          ></img>
          <div className="btnText">
            <p id="nameBTN">Arcade</p>
            <p id="priceTime" className={checkedTime ? "hidden" : ""}>
              $9/mo
            </p>
            <p id="priceTime" className={checkedTime ? "" : "hidden"}>
              $90/yr
            </p>
            <p id="freeTime" className={checkedTime ? "" : "hidden"}>
              2 months free
            </p>
          </div>
        </label>
        <label
          onClick={() => {
            setActiveBTN2(true);
            setActiveBTN1(false);
            setActiveBTN3(false);
          }}
          className={`selectPlanBTN ${activeBTN2 ? "clicked" : ""}`}
        >
          <input
            id="advanced"
            value={"Advanced"}
            onChange={handleChange}
            name="plan"
            type="checkbox"
          ></input>
          <img src={advanced}
          alt=""></img>
          <div className="btnText">
            <p id="nameBTN">Advanced</p>
            <p id="priceTime" className={checkedTime ? "hidden" : ""}>
              $12/mo
            </p>
            <p id="priceTime" className={checkedTime ? "" : "hidden"}>
              $120/yr
            </p>
            <p id="freeTime" className={checkedTime ? "" : "hidden"}>
              2 months free
            </p>
          </div>
        </label>

        <label
          onClick={() => {
            setActiveBTN3(true);
            setActiveBTN1(false);
            setActiveBTN2(false);
          }}
          className={`selectPlanBTN ${activeBTN3 ? "clicked" : ""}`}
        >
          <input
            id="pro"
            value={"Pro"}
            onChange={handleChange}
            name="plan"
            type="checkbox"
          ></input>
          <img src={pro}
          alt=""></img>
          <div className="btnText">
            <p id="nameBTN">Pro</p>
            <p id="priceTime" className={checkedTime ? "hidden" : ""}>
              $15/mo
            </p>
            <p id="priceTime" className={checkedTime ? "" : "hidden"}>
              $150/yr
            </p>
            <p id="freeTime" className={checkedTime ? "" : "hidden"}>
              2 months free
            </p>
          </div>
        </label>
      </div>
      <div className="switchContainer">
        <p
          id="switchParam"
          style={
            checkedTime
              ? { color: "hsl(231, 11%, 63%)" }
              : { color: "hsl(213, 96%, 18%)" }
          }
        >
          Monthly
        </p>
        <label className="switch">
          <input
            id="yearlySubscription"
            checked={checkedTime}
            value={checkedTime}
            onChange={handleChange}
            name="yearlySubscription"
            type="checkbox"
          ></input>
          <span
            className="slider"
            onClick={() => {
              setCheckedTime(!checkedTime);
            }}
          ></span>
        </label>
        <p
          style={
            checkedTime
              ? { color: "hsl(213, 96%, 18%)" }
              : { color: "hsl(231, 11%, 63%)" }
          }
          id="switchParam2"
        >
          Yearly
        </p>
      </div>
      <button
        onClick={() => {
          setPage(page - 1);
          navigate("/");
        }}
        className="backBTN"
      >
        Go Back
      </button>
      <button
        className="nextBTN"
        onClick={() => {
          setPage(page + 1);
          navigate("/addOns");
        }}
      >
        Next Step
      </button>
    </div>
  );
}
