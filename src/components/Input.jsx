import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message" />
      <div className="rightSection">
        <div className="attach">
          <label htmlFor="attachment">
            <img src={Attach} alt="" />
          </label>
          <input type="file" name="" id="attachment" style={{display:"none"}} />
          {/* <img src={Img} alt="" /> */}
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;