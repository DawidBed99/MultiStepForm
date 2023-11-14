import { createContext, useState, useEffect } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  const [checkedTime, setCheckedTime] = useState(false);
  const [addOnClicked, setAddOnClicked] = useState(false);
  const [addOnClicked2, setAddOnClicked2] = useState(false);
  const [addOnClicked3, setAddOnClicked3] = useState(false);

  const [onlinePrice, setOnlinePrice] = useState(0);
  const [storagePrice, setStoragePrice] = useState(0);
  const [profilePrice, setProfilePrice] = useState(0);

  const [planPrice, setPlanPrice] = useState(9);
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    plan: "Arcade",
    yearlySubscription: false,
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data.plan === "Arcade") {
      data.yearlySubscription === "true" ? setPlanPrice(90) : setPlanPrice(9);
    }
    if (data.plan === "Advanced") {
      data.yearlySubscription === "true" ? setPlanPrice(120) : setPlanPrice(12);
    }
    if (data.plan === "Pro") {
      data.yearlySubscription === "true" ? setPlanPrice(150) : setPlanPrice(15);
    }

    if (addOnClicked === true) {
      data.yearlySubscription === "true"
        ? setOnlinePrice(10)
        : setOnlinePrice(1);
    } else {
      setOnlinePrice(0);
    }
    if (addOnClicked2 === true) {
      data.yearlySubscription === "true"
        ? setStoragePrice(20)
        : setStoragePrice(2);
    } else {
      setStoragePrice(0);
    }
    if (addOnClicked3 === true) {
      data.yearlySubscription === "true"
        ? setProfilePrice(20)
        : setProfilePrice(2);
    } else {
      setProfilePrice(0);
    }
  }, [handleChange]);
  return (
    <FormContext.Provider
      value={{
        page,
        setPage,
        data,
        setData,
        handleChange,
        checkedTime,
        setCheckedTime,
        addOnClicked,
        setAddOnClicked,
        addOnClicked2,
        setAddOnClicked2,
        addOnClicked3,
        setAddOnClicked3,
        planPrice,
        onlinePrice,
        profilePrice,
        storagePrice,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
