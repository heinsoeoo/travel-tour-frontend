import http from "@/libs/httpsetting";

export const getTours = async () => {
  const res = await http.get(`/tours`);
  return res.data;
};