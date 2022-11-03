import { api } from "./api";

export async function savePost(post) {
  const { data } = await api.post('/posts', post);
  return data;
}

export async function getPosts(propertyType, propertyGroupId) {
  const { data } = await api.get('/posts', { params: { propertyGroupId, propertyType }});
  return data;
}

export async function getPost(id) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}
