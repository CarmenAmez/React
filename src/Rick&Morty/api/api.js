import axios from "axios";

export const data = axios.create ({ baseURL: "https://rickandmortyapi.com/api"});
