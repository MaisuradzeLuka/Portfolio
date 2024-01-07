import { Form, Formik } from "formik";
import AppWrap from "../../Wrapper/AppWrap";

import "./Contact.scss";

interface IInitialValues {
  name: string;
  email: string;
  msg: string;
}

const initialValues: IInitialValues = {
  name: "",
  email: "",
  msg: "",
};

const Contact = () => {
  const submitHandler = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {() => (
        <Form className="contact">
          <h2>Contact Me</h2>
          <div>
            <input type="text" placeholder="Your Name" name="name" />
            <input placeholder="Your Email" type="email" name="email" />
            <textarea placeholder="Your Message" name="msg" />
          </div>
          <button type="submit" className="submitBtn">
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AppWrap(Contact, "contact");
