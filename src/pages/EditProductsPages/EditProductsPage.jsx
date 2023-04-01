import s from "./EditProductsPage.module.scss";
import EditProductItem from "../../components/EditProductItem/EditProductItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../requests/products";
import { useStore } from "../../store";

export default function EditProductsPage() {
  const {
    user: { user },
    data: { products, setProducts, setFirstRender },
  } = useStore();

  useEffect(() => {
    getProducts(setProducts, setFirstRender);
  }, [setProducts, setFirstRender]);

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
