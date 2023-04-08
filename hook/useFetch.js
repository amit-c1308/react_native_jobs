import { useState, useEffect } from "react";
import axios from "axios";
// import Config from "react-native-config";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      // "X-RapidAPI-Key": Config.RAPID_API_KEY,
      "X-RapidAPI-Key": "16fe60dcdbmshc6fefd09694bea5p13ed60jsn964e7be4d196",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
    9;
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
