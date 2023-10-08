import { useEffect, useState } from "react";
import { jobsData } from "../mockData";
// @ts-ignore
// import { API_KEY } from "@env";
// import axios from "axios";

const fakeApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jobsData);
    }, 1000);
  });
};

// const rapidApiKey = API_KEY;

const useFetch = (endpoint: string, query: Object) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://localhost:8000/api/v1/${endpoint}`,
  //   headers: {
  //     "X-RapidAPI-Key": "",
  //     "X-RapidAPI-Host": "jsearch.p.rapiadpi.com",
  //   },
  //   params: { ...query },
  // };

  // const fetchData = useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.request(options);
  //     setData(response.data.data);
  //   } catch (e) {
  //     setError(e);
  //     alert("there is error");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // const refetch = useCallback(() => {
  //   fetchData();
  // },[]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  useEffect(() => {
    (async () => {
      try {
        const resp: any = await fakeApiCall();
        setData(resp.data);
      } catch (e: any) {
        setError(e);
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
};

export default useFetch;
