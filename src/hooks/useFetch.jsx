import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!url) return;
    const fetchData = () => {
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            setStatus("fetched");
            setData(result);
          },
          (error) => {
            setError(`Error: ${error}`);
            setStatus("failed");
          }
        )
        .catch((error) => {
          setError(`Error: ${error}`);
          setStatus("failed");
        });
    };

    fetchData();
  }, [url]);

  return { data, error, status };
};
