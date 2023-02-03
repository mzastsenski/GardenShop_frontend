import s from "./EditProductPage.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Upload from "../../components/Upload/Upload";
import { editProduct } from "../../requests/edit_products";

export default function EditProductPage() {
  const { products, user } = useSelector((state) => state.data);
  const { id } = useParams();
  const [imgName, setImgName] = useState(null);
  const navigate = useNavigate();

  const product = products.find((e) => e.id === +id);

  const { title, price, description, discont_price, image, categoryId } =
    product ? product : "";

  useEffect(() => {
    setImgName(image);
  }, [image]);

  const submit = (e) => {
    e.preventDefault();
    const { title, price, discont_price, categoryId, image, description } =
      e.target;
    editProduct({
      id: +id,
      title: title.value,
      price: +price.value,
      discont_price: +discont_price.value,
      categoryId: +categoryId.value,
      image: image.value,
      description: description.value,
    });
    navigate("/editproducts");
  };

  return (
    <>
      {user === "Admin" && (
        <div className={s.edit_product}>
          <Link to="/editproducts">
            <button>Back</button>
          </Link>
          <form
            className={s.edit_product}
            onSubmit={submit}
            method="post"
            encType="multipart/form-data"
          >
            <h2>Edit product:</h2>
            <label>
              <p>Title:</p>
              <textarea type="text" defaultValue={title} name="title" />
            </label>
            <label>
              <p> Price:</p>
              <input type="text" defaultValue={price} name="price" />
            </label>
            <label>
              <p> Discont-price: </p>
              <input
                type="text"
                defaultValue={discont_price}
                name="discont_price"
              />
            </label>
            <label>
              <p>Category-ID: </p>
              <input type="text" defaultValue={categoryId} name="categoryId" />
            </label>
            <label>
              <p> Description: </p>
              <textarea
                type="text"
                defaultValue={description}
                name="description"
              />
            </label>
            <label>
              <p>Image: </p>
              <input type="text" defaultValue={imgName} name="image" />
            </label>
            <button>Save</button>
          </form>
          <Upload setSource={setImgName} id={id}></Upload>
        </div>
      )}
    </>
  );
}
