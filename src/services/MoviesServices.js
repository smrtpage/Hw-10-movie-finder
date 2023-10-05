import axios from "axios";

export function getTrending() {
  return axios.get("/trending/movie/week").then((res) => res.data);
}

export function getDetails(movieId) {
  return axios.get(`/movie/${movieId}`).then((res) => res.data);
}

export function getCredit(movieId) {
  return axios.get(`/movie/${movieId}/credits`).then((res) => res.data);
}

export function getReviews(movieId) {
  return axios.get(`/movie/${movieId}/reviews`).then((res) => res.data);
}
