import axios from 'axios';
import { BASEURL } from '../global/reserveWord';

async function fetchList(str) {
  let response = await axios.get(BASEURL + str);
  return response.data;
}

async function fetchAll(arr) {
  let promises = [];

  //create an array of promise
  arr.forEach((ele) => {
    promises.push(axios.get(BASEURL + ele));
  });

  //wait for promises to resolve
  const lists = await Promise.all(promises);

  //convert array to obj data structure
  return arr.reduce((acc, curr, indx) => {
    acc[curr] = lists[indx].data;
    return acc;
  }, {});
}

export { fetchList, fetchAll };
