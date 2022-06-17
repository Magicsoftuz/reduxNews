import axios from "axios";

const getData = async (path) => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/${path}`);
  return data;
};

export default getData;
