import { api } from "./api";

export async function getExtras() {
  const { data } = await api.get('/extras');
  return data;
}
