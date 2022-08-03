import axios from "axios";

const BASE_URL = "http://localhost:4000"

async function getBids() {
  const promise = await axios.get(`${BASE_URL}/bids`);

  return promise;
}

export {
  getBids
}