import { useState } from "react";
import loginFields from "./constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";

const fields = loginFields;

let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  localStorage.clear();
  const [login, setLogin] = useState(fieldsState);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in login:", login);
  };

  return (
    <form className="mt-8 space-y-6 px-4" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={login[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
};

export default Login;
