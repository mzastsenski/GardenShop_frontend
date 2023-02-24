import axios from "axios";

export const editProduct = (data) =>
  fetch(`/editproducts/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

export const newProduct = (data) =>
  fetch(`/editproducts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

export const deleteProduct = (id) => {
  fetch(`/editproducts/delete/${id}`, {
    method: "DELETE",
  });
};
export const sendFile = async (data, uploadProgress) => {
  axios.request({
    method: "POST",
    url: "/editproducts/upload",
    data,
    onUploadProgress: uploadProgress,
  });
};

export const sendFile_v2 = async (data, progress) => {
  const req = new XMLHttpRequest();
  req.upload.addEventListener("progress", progress);
  req.open("POST", "/editproducts/upload");
  req.send(data);
};
