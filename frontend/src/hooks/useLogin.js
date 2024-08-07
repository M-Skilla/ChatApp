import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setUser } = useAuth();
  const login = async (username, password) => {
    if (!username || !password) {
      toast.error("Please fill in all the fields");
      return;
    }
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chatUser", JSON.stringify(data));
      setUser(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
