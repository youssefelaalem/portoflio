import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import animationDone from "../../animation/animationDone.json" 
import animationEmail from "../../animation/animationEmail.json" 
function Contact() {
  const [state, handleSubmit] = useForm("mzbnorgp");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span> Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="flex" style={{justifyContent:"space-between"}}>
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input type="email" autoComplete="off" required name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
          {state.submitting? "Submitting...":"Submit"}</button>
        { state.succeeded&&(<p className="flex" style={{color:"rgb(82 82 91)"}}>
          <Lottie style={{height:"80px"}} loop={false} animationData={animationDone}/>
          The Sending Of Your Email Is Done!</p>)}
        </form>
        <div className="animation email">
          <Lottie style={{height:"300px"}} animationData={animationEmail}/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
