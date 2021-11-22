import { useEffect, useState } from "react";

export function useQuery(retrieveData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    retrieveData().then((data) => {
      setIsLoading(false);
      setData(data);
    });
  }, [retrieveData]);

  return { data, isLoading };
}