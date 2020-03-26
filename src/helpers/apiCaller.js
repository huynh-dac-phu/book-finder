import axios from "./axiosServices";

const apiKey = "AIzaSyB3HYEXAgT9KQs_pEkroMLgqxpM3LPUkXs";
const url = `https://www.googleapis.com/books/v1/volumes?q=""&startIndex=0&maxResults=20&key=${apiKey}`;

export const loadListBook = () => {
  return axios.get(url);
};

export const loadMoreListBook = startIndex => {
  return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=""&startIndex=${startIndex}&maxResults=20&key=${apiKey}`
  );
};

export const searchBook = (query, option) => {
  console.log(query, option);
  return axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}+${option}:keyes&key=${apiKey}`
  );
};
