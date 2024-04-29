import { data } from "./api";

export const getCharacters = () => data.get("/character");

export const getCharacterById = (id) => data.get(`/character/${id}`);

