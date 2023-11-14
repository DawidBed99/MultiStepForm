import "./Finish.css";
import useFormContext from "../../hooks/useFormContext";
import { useNavigate } from "react-router-dom";
export default function Finish() {
  const navigate = useNavigate();
  const {
    page,
    setPage,
    data,
    planPrice,
    onlinePrice,
    storagePrice,
    profilePrice,
  } = useFormContext();

  return (
    <div className="formContainerFinish">
      <h1>Finishing up </h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="finishContainer">
        <div className="summaryContainer">
          <div className="summaryPlanContainer">
            <p>
              {data.plan} (
              {data.yearlySubscription === "true" ? "Yearly" : "Monthly"})
              <br />
              <button
                onClick={() => {
                  setPage(1);
                  navigate("/selectPlan");
                }}
                id="changeLink"
              >
                Change
              </button>
            </p>
            <p>
              ${planPrice}/{data.yearlySubscription === "true" ? "yr" : "mo"}
            </p>
          </div>
          <div className="summaryAddOnsContainer">
            <div id="summaryAddOnsContainerLeft">
              <p>{data.onlineServices === "true" ? "Online Services" : ""}</p>
              <p>{data.largerStorage === "true" ? "Larger Storage" : ""}</p>
              <p>
                {data.customizableProfile === "true"
                  ? "Customizable Profile"
                  : ""}
              </p>
            </div>
            <div id="summaryAddOnsContainerRight">
              <p>
                {data.onlineServices === "true"
                  ? data.yearlySubscription === "true"
                    ? "+10$/yr"
                    : "+1$/mo"
                  : ""}
              </p>
              <p>
                {data.largerStorage === "true"
                  ? data.yearlySubscription === "true"
                    ? "+20$/yr"
                    : "+2$/mo"
                  : ""}
              </p>
              <p>
                {data.customizableProfile === "true"
                  ? data.yearlySubscription === "true"
                    ? "+20$/yr"
                    : "+2$/mo"
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <p id="addOnsTotalText">
            Total (per {data.yearlySubscription === "true" ? "year" : "month"})
          </p>
          <p id="addOnsTotalCost">
            +${planPrice + onlinePrice + storagePrice + profilePrice}/
            {data.yearlySubscription === "true" ? "yr" : "mo"}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/addOns");
          setPage(page - 1);
        }}
        className="backBTN"
      >
        Go Back
      </button>
      <button className="confirmBTN" onClick={() => navigate("/thanks")}>
        Confirm
      </button>
    </div>
  );
}
