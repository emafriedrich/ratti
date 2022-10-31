import { api } from "./api";

export async function savePost(post) {
  const { data } = await api.post('/posts', post);
  return data;
}

export async function getPosts() {
  const { data } = await api.get('/posts');
  return data;
}

export async function getPost(id) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}
