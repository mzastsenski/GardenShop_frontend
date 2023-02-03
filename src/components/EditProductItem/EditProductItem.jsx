import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from "./EditProductItem.module.scss";
import { deleteProduct } from "../../requests/edit_products";
import { removeProduct } from "../../store/slices/dataSlice";

export default function EditProductItem({ id, title, price, image }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const edit = () => navigate(`/editproduct/${id}`);
  const delete_product = () => {
    if (window.confirm("delete?") === true) {
      deleteProduct(id);
      dispatch(removeProduct(id));
    }
  };

  return (
    <div className={s.item}>
      <p>{id}</p>
      <p>
        <img src={image} alt="" />
      </p>
      <p>{title}</p>
      <p>{price}€</p>
      <p>
        <button onClick={edit}>Edit</button>
      </p>
      <p>
        <button onClick={delete_product} className={s.delete_button}>
          X
        </button>
      </p>
    </div>
  );
}
