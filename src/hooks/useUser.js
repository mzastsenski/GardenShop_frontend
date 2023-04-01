import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState("");

  return { user, setUser };
}
