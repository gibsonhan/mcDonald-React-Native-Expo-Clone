import axios from 'axios';
import { BASEURL } from '../global/reserveWord';

async function fetchList(type) {
  let response = await axios.get(BASEURL + type);
  return response.data;
}

export { fetchList };
