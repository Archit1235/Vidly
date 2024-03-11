import http from "./httpService";

export function getGenres() {
  return http.get("http://127.0.0.1:3000/api/genres");
}
