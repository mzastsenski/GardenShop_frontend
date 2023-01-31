import { createAsyncThunk } from "@reduxjs/toolkit";

export const postLogout = () => fetch("api/logout", { method: "POST" });

export const login_req = createAsyncThunk("data/login_req", (data) => {
  return fetch("api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

export const signUp_req = createAsyncThunk("data/signUp_req", (data) => {
  return fetch("/api/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
});

export const checkUser = createAsyncThunk("data/checkUser", (user) =>
  fetch("api/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ user }),
  }).then((res) => res.json())
);
