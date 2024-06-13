import axios from "axios";
import React, { useEffect } from "react";

export const AxiosExample = () => {
  const fetchPincodeInfo = async () => {
    try {
      const response = await axios({
        url: `https://api.postalpincode.in/pincode/${531055}`,
        method: "GET",
        params: {
          name: "gangadhar",
          age: 26,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPincodeInfo();
  }, []);
  return <div>axiosExample</div>;
};
