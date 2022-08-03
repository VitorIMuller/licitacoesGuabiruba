import axios from "axios";

const BASE_URL = "https://api-licitacoes.herokuapp.com"

async function getBids() {
  const promise = await axios.get(`${BASE_URL}/bids`);

  return promise;
}

export {
  getBids
}