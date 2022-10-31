import { api } from './api';

export async function saveImage(image) {
  console.log(image)
  const formData = new FormData();
  formData.append('image', image);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const { data } = await api.post('/images', formData, config);
  return data;
}
