import React from "react";
import "./contact.scss";

const Contact = () => {
  const [msg, setMsg] = React.useState(false);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type="text" placeholder="Email" />
          <textarea placeholder="给我留言..." />
          <button type="submit" onClick={() => setMsg(true)}>
            发 射
          </button>
          {msg && <span>thanks :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
