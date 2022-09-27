import { api } from "./api";

export async function getFeatures() {
  const { data } = await api.get('/features');
  return data;
}
