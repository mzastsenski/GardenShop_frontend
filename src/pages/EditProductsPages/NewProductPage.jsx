import s from "./EditProductPage.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Upload from "../../components/Upload/Upload";
import { newProduct } from "../../requests/edit_products";

export default function NewProductPage() {
  const { user } = useSelector((state) => state.data);
  const [imgName, setImgName] = useState(null);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const { title, price, discont_price, categoryId, image, description } =
      e.target;
    newProduct({
      id: +(Date.now() / 100).toFixed(),
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
            <h2>New product:</h2>
            <label>
              <p>Title:</p>
              <textarea type="text" name="title" />
            </label>
            <label>
              <p> Price:</p>
              <input type="text" name="price" />
            </label>
            <label>
              <p> Discont-price: </p>
              <input type="text" name="discont_price" />
            </label>
            <label>
              <p>Category-ID: </p>
              <input type="text" name="categoryId" />
            </label>
            <label>
              <p> Description: </p>
              <textarea type="text" name="description" />
            </label>
            <label>
              <p>Image: </p>
              <input type="text" defaultValue={imgName} name="image" />
            </label>
            <button>Save</button>
          </form>
          <Upload setSource={setImgName}></Upload>
        </div>
      )}
    </>
  );
}
