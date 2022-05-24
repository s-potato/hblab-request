import axios from "axios";
import { BASE_API_URL } from "../constants/config";

var token = localStorage.getItem("token");
if (!token)
  token = sessionStorage.getItem("token")

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});
