import { api } from "../config/api";

export const gameLoader = async () => {
  try {
    const res = await api.get("/games", {
    params: {
      key: import.meta.env.VITE_API_KEY,
    },
  });
  return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};



