import { useState } from "react";
import s from "./Upload.module.scss";
import { sendFile } from "../../requests/edit_products";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Upload({ setSource }) {
  const [name, setName] = useState("Choose File");
  const [progress, setProgress] = useState(0);

  const onFileChange = (event) => {
    setSource("/product_img/" + event.target.files[0].name);
    setName(event.target.files[0].name);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (e.target.file.files.length) {
      const data = new FormData(e.target);
      sendFile(data, updateProgress);
    }
  };

  const updateProgress = (e) => {
    setProgress(Math.floor((e.loaded / e.total) * 100));
  };

  return (
    <div className={s.upload}>
      <form method="POST" encType="multipart/form-data" onSubmit={submit}>
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
        <button className="button_add_fav" type="submit">
          Upload
        </button>
      </form>
      {progress > 0 && (
        <div className={s.progress_bar}>
          <CircularProgressbar value={progress} text={`${progress}%`} />
        </div>
      )}
    </div>
  );
}
