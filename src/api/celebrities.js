import axios from "axios";
import { baseUrl, headers } from "./constants";

export function getCelebrity(name) {
  return (
    axios({
      method: 'GET',
      url: baseUrl + name,
      headers: headers(),
      contentType: 'application/json',
    }).then(res => res.data)
  );
}
