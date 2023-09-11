import { API_HOST } from "../utils/constants";

export async function getPokesApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=15&offset=0`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPokesDetailByApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
