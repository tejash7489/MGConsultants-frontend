import axios from "axios";

const API = `${import.meta.env.VITE_BACKEND_URL || ""}/api`;

export async function submitEnquiry(payload) {
  const { data } = await axios.post(`${API}/enquiries`, payload, { timeout: 20000 });
  return data;
}
