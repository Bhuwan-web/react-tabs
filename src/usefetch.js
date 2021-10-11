import React, { useEffect } from "react";
const useFetch = (url) => {
  useEffect((url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data;
      });
  }, []);
};
export default useFetch;
