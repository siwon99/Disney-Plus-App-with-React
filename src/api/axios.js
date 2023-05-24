import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "50aec0cbb7a056ce2ad8290259343ffa",
    language: "ko-KR" 
  }
})

export default instance;