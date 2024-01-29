// prettier-ignore
import {Field,Form,Formik,FormikValues,ErrorMessage,FormikHelpers,} from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { toast } from "react-toastify";
import AppWrap from "../../Wrapper/AppWrap";

import "./Contact.scss";

interface IInitialValues {
  from_name: string;
  from_email: string;
  message: string;
}

const initialValues: IInitialValues = {
  from_name: "",
  from_email: "",
  message: "",
};

const Contact = () => {
  const validationSchema = Yup.object({
    from_name: Yup.string().required("Your name is required"),
    from_email: Yup.string()
      .test("georgian-characters", "Enter valid email", (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value!)
      )
      .required("Your email is required"),
    message: Yup.string()
      .min(10, "Min 10 charactrs")
      .required("Your email is required"),
  });

  const submitHandler = (
    values: FormikValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    emailjs
      .send("service_d05qpib", "template_q3fuipr", values, "M8p_b-nfnjPIzQPku")
      .then(() =>
        toast.success("Email has been sent", {
          position: "top-center",
          autoClose: 3000,
          delay: 100,
        })
      )
      .catch(() =>
        toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 3000,
          delay: 100,
        })
      )
      .finally(() => resetForm());
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="contact" autoComplete="off">
          <h2>Contact Me</h2>
          <div className="contact__inputs">
            <div>
              <Field type="text" placeholder="Your Name" name="from_name" />
              <ErrorMessage name="from_name" />
            </div>
            <div>
              <Field placeholder="Your Email" type="email" name="from_email" />
              <ErrorMessage name="from_email" />
            </div>
            <div>
              <Field as="textarea" placeholder="Your Message" name="message" />
              <ErrorMessage name="message" />
            </div>
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
