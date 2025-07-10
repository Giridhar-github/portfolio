import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mistake, setMistake] = useState(null);
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;
  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJnIXIhZCNAcjUwNDUiLCJpYXQiOjE3NTE4NjcyNDUsImV4cCI6MTgxNDk4MjQ0NX0.cphspLSfEDFzIzgkkIViBHSueSPm8kuGjJ6QNXGoBnU";

  useEffect(() => {
    const headers = { Authorization: `Bearer ${API_TOKEN}` };

    axios
      .get(API_URL, { headers })
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        setLoading(false);
        setMistake(err.message);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading, mistake }}>
      {children}
    </ApiContext.Provider>
  );
};
