/* eslint-disable no-lone-blocks */
import "./Personal.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFormContext from "../../hooks/useFormContext";
export default function PersonalInfo() {
  const navigate = useNavigate();

  const { page, setPage, data, handleChange } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="formContainerPersonal">
      <h1>Personal info </h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form
        onSubmit={handleSubmit(() => {
          {
            setPage(page + 1);
            navigate("/selectPlan");
          }
        })}
      >
        <div className="formFirstPage">
          <label htmlFor="name">
            Name <p className="validateError">{errors.name?.message}</p>
          </label>

          <input
            className={`personalInfoInput ${
              errors?.name?.message ? "errorBorder" : ""
            }`}
            placeholder="e.g. Stephen King"
            type="text"
            id="name"
            value={data.name}
            {...register("name", {
              required: "This field is required",
            })}
            onChange={handleChange}
          />
          <label htmlFor="email">
            Email Address
            <p className="validateError">{errors.email?.message}</p>
          </label>

          <input
            className={`personalInfoInput ${
              errors?.email?.message ? "errorBorder" : ""
            }`}
            placeholder="e.g. stephenking@lorem.com"
            type="text"
            id="email"
            value={data.email}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email",
              },
            })}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumber">
            Phone number{" "}
            <p className="validateError">{errors.phoneNumber?.message}</p>
          </label>

          <input
            className={`personalInfoInput ${
              errors?.phoneNumber?.message ? "errorBorder" : ""
            }`}
            placeholder="e.g. +1 234 567 890"
            type="text"
            id="phoneNumber"
            value={data.phoneNumber}
            {...register("phoneNumber", {
              required: "This field is required",
              minLength: { value: 9, message: "Minimum length is 9" },
            })}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="nextBTN">
          Next Step
        </button>
      </form>
    </div>
  );
}
