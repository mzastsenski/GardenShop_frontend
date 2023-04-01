import s from "./Order.module.scss";
import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../../requests/orders";
import { useStore } from "../../store";

export default function Order({ id, user, products, date }) {
  const navigate = useNavigate();

  const {
    orders: { setOrder, removeOrder },
  } = useStore();

  const admin = useStore().user.user;

  const show = () => {
    setOrder(products);
    navigate("/order");
  };
  const delete_order = () => {
    if (window.confirm("remove?") === true) {
      deleteOrder(id);
      removeOrder(id);
    }
  };

  return (
    <div className={s.order}>
      <p>{user}</p>
      <p>{date}</p>
      <p>
        <button onClick={show}>Show</button>
      </p>
      {admin === "Admin" && (
        <p>
          <button onClick={delete_order} className={s.delete_button}>
            X
          </button>
        </p>
      )}
    </div>
  );
}
