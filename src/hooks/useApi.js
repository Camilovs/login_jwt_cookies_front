import { useState, useEffect } from "react";
import axios from "axios";
/**
 * Custom Hook cuando se realiza un get de datos en el renderizado
 * del componente (useEffect). Por ejemplo, obtener los datos del
 * usuario y mostrarlos en su perfil u obtener datos de pedidos para
 * mostrarlos en una tabla.
 *
 * @param {String} endpoint String con el endpoint de la API.
 * @returns {{loading:State, data:State}} Objeto JSON con el estado de loading y de data.
 */
export const useApi = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const fetch = axios.create({
    baseURL: process.env.REACT_APP_URL_BACK,
  });

  useEffect(() => {
    const fetchTo = async (endpoint) => {
      const response = await fetch({
        endpoint,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setData(response.data);
    };
    setLoading(true);
    fetchTo(endpoint);
    setLoading(false);
  }, [fetch, endpoint]);

  return { loading, data };
};
