
import axios from 'axios';

const httpClient = () => {
  const token = document.querySelector('[name=csrf-token]').content

  return axios.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 1000,
      headers: {
        'X-CSRF-TOKEN': token
      }
  })
}

export default httpClient;