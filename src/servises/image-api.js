
import axios from 'axios';

export async function fetchImages(query, page) {
    const BASE_URI = 'https://pixabay.com/api';
    const params = new URLSearchParams({
      key: '32503099-d9dd46ceec4182b992252d5d9',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page,
    });


    const uri = `${BASE_URI}/?${params}&q=${encodeURIComponent(query)}`;

    const response = await axios.get(uri);
    return response.data;
}