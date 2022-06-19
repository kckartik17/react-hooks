import "./App.css";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      <input
        name="email"
        placeholder="Enter Name..."
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Enter Password..."
        value={values.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </div>
  );
};

export default App;
