import axios from "axios";

const API_URL = "http://localhost:8080/account";

export const createAccount = (data) => axios.post(`${API_URL}/create`, data);

export const getAccount = (id) => axios.get(`${API_URL}/${id}`);

export const getTransactions = (id) => axios.get(`${API_URL}/${id}/transactions`);

export const deposit = (id, amount) => 
  axios.post(`${API_URL}/${id}/deposit?amount=${amount}`);

export const withdraw = (id, amount) => 
  axios.post(`${API_URL}/${id}/withdraw?amount=${amount}`);
