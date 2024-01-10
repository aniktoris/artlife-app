import { useState } from 'react';

export function useFetch(url, initialData = []) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch. Status code: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      if (Array.isArray(data.records)) {
        setData(data.records);
      } else {
        setData(data);
      }
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
