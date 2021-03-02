import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const useProducts = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const headers = {
        "content-type": "application/x-www-form-urlencoded",
        "x-rapidapi-key": "94daf8581dmsh36d3b6116d51e1fp12c9c7jsn55ec2e17b3d3",
        "x-rapidapi-host": "BestBuyraygorodskijV1.p.rapidapi.com",
        "useQueryString": true
      };
      const params = {
          apiKey : 'itDA4GN4tXHqxpGYhZxu9wxj'
      }
      const result = await axios.get(
        `https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209400050001))?apiKey=itDA4GN4tXHqxpGYhZxu9wxj&format=json`
      );
      const productResult = result.data;
      setProductList(productResult.products);
    };

    getProducts();
  }, []);


  return {productList}
};
export default useProducts;
