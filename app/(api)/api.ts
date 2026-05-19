import axios from "axios";

const api = process.env.NEXT_PUBLIC_PRODUCT_API;

export const getAllProducts = async () => {
  const response = await axios.get(api);
  return response.data;
};

export const getSingleProduct = async (id: string) => {
  const response = await axios.get(`${api}/${id}`);
  return response.data;
};
