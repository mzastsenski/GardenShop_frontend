import { useState } from "react";
import s from "./Upload.module.scss";

export default function Upload({ setSource, id }) {
  const [name, setName] = useState("Choose File");

  const onFileChange = (event) => {
    console.log(event.target.files);
    setSource("/product_img/" + event.target.files[0].name);
    setName(event.target.files[0].name);
  };

  return (
    <div className={s.upload}>
      <form
        method="post"
        action="/editproducts/upload"
        encType="multipart/form-data"
        onSubmit={(e) => e}
      >
        <label htmlFor="upload">
          <span>{name}</span>
          <input
            id="upload"
            name="file"
            type="file"
            onChange={onFileChange}
            hidden
          />
        </label>
        <input name="id" type="text" hidden defaultValue={id} />
        <button
          className="button_add_fav"
          onClick={() => alert("File will upload")}
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
