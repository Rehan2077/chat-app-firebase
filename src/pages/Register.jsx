import React, { useState } from "react";
import avatarImg from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(displayName, email, password, file);
    try {
      //   //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //   //Create a unique image name
      const date = new Date().getTime();
      console.log(date, res);
      const storageRef = ref(storage, `${displayName + date}`);
      console.log(storageRef);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            // navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Lama Chat</h2>
        <h5>Register</h5>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label htmlFor="avatar" className="avatar">
            <img src={avatarImg} alt="select avatar" />
            <span>Add an avatar</span>
          </label>
          <input style={{ display: "none" }} type="file" id="avatar" />
          <button>Sign up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};
export default Register;