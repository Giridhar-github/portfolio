import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mistake, setMistake] = useState(null);
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;
  useEffect(() => {
    axios
      .get(API_URL)
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
