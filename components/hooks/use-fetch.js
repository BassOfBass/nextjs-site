import { useEffect, useState } from "react";

/**
 * @param {RequestInfo} initialURL 
 * @param {RequestInit} initialOptions 
 */
export function useFetch(initialURL, initialOptions) {
  const [url, setURL] = useState(initialURL);
  const [options, setOptions] = useState(initialOptions);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetchData();

    async function fetchData() {
      
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
      
    }

  }, [url, options]);

  return { data, error, loading, setURL, setOptions };
}