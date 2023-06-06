import { TextField } from "@mui/material";
import "./Contacts.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Contacts = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  ("contacts__input");

  const handleClick = (e) => {
    e.preventDefault();

    if (name && phone) {
      fetch("http://localhost:9090/appeals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          message: message.trim(),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            // alert("Successfully sended!");
            toast("Xabar qoldirildi!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            e.target.reset();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className='contacts' id='contacts'>
      <div className='container contacts__container'>
        <div className='contacts__inputs-wrapper'>
          <form className='contact__form' onSubmit={handleClick}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              className='contacts__name contacts__input'
              id='outlined-basic'
              label='Ismingizni kiriting'
              variant='outlined'
              required
              name='name'
            />

            <TextField
              name='phone'
              onChange={(e) => setPhone(e.target.value)}
              className='conacts__phone contacts__input'
              id='outlined-basic'
              label='telefon raqamingizni kiriting'
              variant='outlined'
              type='tel'
              required
            />

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='form-control contacts__input'
              name='message'
              id='messages'
              cols='30'
              rows='5'
              placeholder='Savolingizni kiriting'
            ></textarea>

            <button className='contacts__btn'>Yuborish</button>
          </form>
        </div>

        <div className='contacts__map-wrapper'></div>
      </div>
    </div>
  );
};

export default Contacts;
