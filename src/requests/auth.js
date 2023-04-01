export const postLogout = () => fetch("/api/logout", { method: "POST" });

export const login_req = (data, setUser) => {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res === 401) {
        alert("Login Fault");
      } else {
        setUser(res);
        localStorage.setItem("user", res);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("wishlist", JSON.stringify([]));
      }
    });
};

export const signUp_req = (data) => {
  return fetch("/api/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res === 401) alert("User exists");
      else window.location.replace("/Login");
    });
};

export const checkUser = (user, setUser) => {
  fetch("/api/checkUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ user }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res !== 200) {
        setUser("");
        localStorage.setItem("user", "");
      }
    });
};
