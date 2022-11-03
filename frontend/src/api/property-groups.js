import { api } from "./api";

export async function getAll() {
  const { data } = await api.get('/property-groups');
  return data;
}
