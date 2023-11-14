import "./Thanks.css";
import thank from "../../images/icon-thank-you.svg";
export default function Thanks() {
  return (
    <div className="formContainerThanks">
      <div className="thanksContainer">
        <img id="thankIMG" src={thank}
        alt=""></img>
        <h2 id="thankHeader">Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
