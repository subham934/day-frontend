import { api } from "../config/api";

export const gameLoader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search") || "";

    const params = {
      key: import.meta.env.VITE_API_KEY,
    };

    if (search) {
      params.search = search;
    }

    const res = await api.get("/games", { params });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const gameDetailsLoader = async ({ params }) => {
  try {
    const res = await api.get(`/games/${params.id}`, {
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
