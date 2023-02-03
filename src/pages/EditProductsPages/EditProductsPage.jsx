import s from "./EditProductsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import EditProductItem from "../../components/EditProductItem/EditProductItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../requests/products";

export default function EditProductsPage() {
  const { products, user } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortedProducts =
    products.length > 0 ? [...products].sort((a, b) => a.id - b.id) : [];

  return (
    <>
      {user === "Admin" && (
        <div className={s.edit_page}>
          <Link to="/newproduct">
            <button>New product</button>
          </Link>
          <h2>Products</h2>
          <div className={s.container}>
            <div>
              <p>id</p>
              <p>Image</p>
              <p>Title</p>
              <p>Price</p>
              <p>Edit</p>
              <p>Delete</p>
            </div>
            {sortedProducts.map((e) => (
              <EditProductItem key={e.id} {...e} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
