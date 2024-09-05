const API = "http://api.themoviedb.org/3";
export function get(path) {
  return fetch(API+path,{
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzAwY2I0MzYxMGRjNjA3ZGQ0ZmUxYjc3ODZlOTg0MSIsIm5iZiI6MTcyNTQ5MjU2Mi4xNjg0MzMsInN1YiI6IjY2ZDdjODljNmMyMGZjOTNiZDlkN2E2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uByJlHZH9PplJqTjjIDW4Zkbi5YKOuSqT35T0vqK6mk",
          "Content-Type": "application/json;charset=utf-8"
    }
  }).then((result)=>result.json());
}
