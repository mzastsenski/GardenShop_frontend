import s from "./Order.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrder } from "../../store/slices/ordersSlice";
import { deleteOrder } from "../../requests/orders";
import { removeOrder } from "../../store/slices/ordersSlice";

export default function Order({ id, user, products, date }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const show = () => {
    dispatch(setOrder(products));
    navigate("/order");
  };
  const delete_order = () => {
    if (window.confirm("remove?") === true) {
      deleteOrder(id);
      dispatch(removeOrder(id));
    }
  };

  return (
    <div className={s.order}>
      <p>{user}</p>
      <p>{date}</p>
      <p>
        <button onClick={show}>Show</button>
      </p>
      <p>
        <button onClick={delete_order} className={s.delete_button}>
          X
        </button>
      </p>
    </div>
  );
}
