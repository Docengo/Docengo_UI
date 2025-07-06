// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:2707/auth/check", {
        withCredentials: true,
      })
      .then((res) => setIsAuthenticated(res.data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  return isAuthenticated;
}
