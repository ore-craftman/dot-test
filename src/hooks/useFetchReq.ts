import { useState, useEffect } from "react";

export const useFetchReq = (url: string) => {
  const [data, setData]: any = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
