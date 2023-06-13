import { useEffect, useState } from "react";
import "./Appeals.css";
import { useLogin } from "../../Contexts/auth.context";
import { toast } from "react-toastify";

const Appeals = () => {
  const [appeals, setAppeals] = useState([]);
  const [token] = useLogin();

  useEffect(() => {
    fetch("http://localhost:9090/appeals")
      .then((res) => res.json())
      .then((data) => {
        setAppeals(data.appeals);
      });
  }, [appeals]);

  const handleAnswer = (e) => {
    fetch(`http://localhost:9090/appeals/${e.target.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data)
          toast("Belgilandi!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      });
  };

  return (
    <div>
      <h2 className='h4 mb-3'>Sayt orqali qoldirilgan murojaatlar</h2>

      <div className='containerbek'>
        <ul className='responsive-table'>
          <li className='table-header'>
            <div className='col appeals-col-1'>Ism familiya</div>
            <div className='col appeals-col-2'>telefon raqami</div>
            <div className='col appeals-col-3'>qiziqqan kursi</div>
            <div className='col appeals-col-4'>xabar</div>
            <div className='col appeals-col-5'>vaqti</div>
            <div className='col appeals-col-6'>holati</div>
          </li>

          {appeals.map((item) => (
            <li key={item.id} className='table-row'>
              <div className='col appeals-col-1' data-label='Job Id'>
                {item.name}
              </div>
              <div className='col appeals-col-2' data-label='Customer Name'>
                {item.phone}
              </div>
              <div className='col appeals-col-3' data-label='Amount'>
                {item.title}
              </div>
              <div className='col appeals-col-4' data-label='Amount'>
                {item.message}
              </div>
              <div className='col appeals-col-5' data-label='Amount'>
                {item.created_at}
              </div>
              <div className='col appeals-col-6' data-label='Payment Status'>
                <input
                  id={item.id}
                  onChange={handleAnswer}
                  type='checkbox'
                  checked={item.answered}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appeals;
