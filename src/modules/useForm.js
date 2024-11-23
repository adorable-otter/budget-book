import { useState } from "react";
import { initialFormState } from "../constants/form";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDateChange = (dateString, name) => {
    setValues({
      ...values,
      [name]: dateString,
    });
  };

  const resetForm = () => {
    setValues(initialFormState);
  };

  return { values, handleInputChange, handleDateChange, resetForm };
};

export default useForm;
