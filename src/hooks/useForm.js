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

  const handleValueChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFormState);
  };

  return { values, handleInputChange, handleValueChange, resetForm, setValues };
};

export default useForm;
