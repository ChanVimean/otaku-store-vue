import axios from "axios";

const api = async () => {
  try {
    const res = await axios.get('https://chanvimean.github.io/Otaku-Vault-Data/index.json');
    return res.data;
  } catch(error) {
    alert('Error 500: ', error);
    return null;
  }
}

export default api;