import "./AddOns.css";
import { useNavigate } from "react-router-dom";
import useFormContext from "../../hooks/useFormContext";
export default function AddOns() {
  const navigate = useNavigate();
  const {
    page,
    setPage,
    data,
    handleChange,
    addOnClicked,
    setAddOnClicked,
    addOnClicked2,
    setAddOnClicked2,
    addOnClicked3,
    setAddOnClicked3,
  } = useFormContext();

  return (
    <div className="formContainerAddOns">
      <h1>Pick add-ons </h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <div className="formSecondPage">
          <label
            className={`checkboxContainer ${addOnClicked ? "clicked" : ""}`}
          >
            <input
              onClick={() => {
                setAddOnClicked(addOnClicked === true ? false : true);
              }}
              type="checkbox"
              id="onlineServices"
              value={!addOnClicked}
              checked={addOnClicked}
              onChange={handleChange}
              name="onlineServices"
              
            ></input>
            <span className="checkmark"></span>
            <div className="addOnsTextContainer">
              <p id="addOnsTitle">Online Service</p>
              <p id="addOnsText">Access to multiplayer games</p>
            </div>
            <p id="addOnsPrice">
              {data.yearlySubscription === "true" ? "+10$/yr" : "+1$/mo"}
            </p>
          </label>
          <label
            className={`checkboxContainer ${addOnClicked2 ? "clicked" : ""}`}
          >
            <input
              onClick={() => {
                setAddOnClicked2(!addOnClicked2);
              }}
              type="checkbox"
              id="largerStorage"
              value={!addOnClicked2}
              checked={addOnClicked2}
              onChange={handleChange}
              name="largerStorage"
             
            ></input>
            <span className="checkmark"></span>
            <div className="addOnsTextContainer">
              <p id="addOnsTitle">Larger Storage</p>
              <p id="addOnsText">Extra 1TB of cloud save</p>
            </div>
            <p id="addOnsPrice">
              {data.yearlySubscription === "true" ? "+20$/yr" : "+2$/mo"}
            </p>
          </label>
          <label
            className={`checkboxContainer ${addOnClicked3 ? "clicked" : ""}`}
          >
            <input
              onClick={() => {
                setAddOnClicked3(!addOnClicked3);
              }}
              type="checkbox"
              id="customizableProfile"
              value={!addOnClicked3}
              checked={addOnClicked3}
              onChange={handleChange}
              name="customizableProfile"
         
            ></input>
            <span className="checkmark"></span>
            <div className="addOnsTextContainer">
              <p id="addOnsTitle">Customizable Profile</p>
              <p id="addOnsText">Custom theme on your profile</p>
            </div>
            <p id="addOnsPrice">
              {data.yearlySubscription === "true" ? "+20$/yr" : "+2$/mo"}
            </p>
          </label>
        </div>
      </form>
      <button
        onClick={() => {
          setPage(page - 1);
          navigate("/selectPlan");
        }}
        className="backBTN"
      >
        Go Back
      </button>
      <button
        className="nextBTN"
        onClick={() => {
          setPage(page + 1);
          navigate("/finish");
        }}
      >
        Next Step
      </button>
    </div>
  );
}
