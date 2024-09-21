import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "quzD4HfM7ucZ6oxYuJ5_7oJ6xiz-qf9YsLyXN10BNOQ";

export const fetchPhotos = async (page, query) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return response.data;
};
