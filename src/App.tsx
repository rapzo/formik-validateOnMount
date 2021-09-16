import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";

interface ToggleProps {
  on: boolean;
  setOn: (on: boolean) => void;
}

function Toggle({ on, setOn }: ToggleProps) {
  const className = `Toggle--${on ? "on" : "off"}`;

  return (
    <div className="Toggle">
      <input type="hidden" name="on" value={String(on)} />
      <button type="button" className={className} onClick={() => setOn(!on)}>
        toggle
      </button>
    </div>
  );
}

function useForm() {
  return useFormik({
    initialValues: {
      on: false
    },
    validationSchema: Yup.object({
      on: Yup.boolean().required()
    }),
    validateOnMount: true,
    async onSubmit() {
      alert("done");
    }
  });
}

export default function App() {
  const form = useForm();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <form onSubmit={form.handleSubmit}>
        <Toggle
          on={form.values.on}
          setOn={() => form.setFieldValue("on", !form.values.on)}
        />

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
