const contentType = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const options = (method, body = null) => ({
  method,
  headers: contentType,
  body: body ? JSON.stringify(body) : undefined,
});

const URL_BASE = 'http://localhost:3000';

const getAll = async (url) => fetch(`${URL_BASE}/${url}`).then((e) => (e.json()));

const getById = async (url, id) => fetch(`${URL_BASE}/${url}/${id}`).then((e) => (e.json()));

const post = async (url, user) => fetch(`${URL_BASE}/${url}`, options('POST', user))
  .then((e) => (e.json()));

const put = async (url, user) => fetch(`${URL_BASE}/${url}`, options('PUT', user))
  .then((e) => (e.json()));

const remove = async (url, user) => fetch(`${URL_BASE}/${url}`, options('DELETE', user))
  .then((e) => (e.json()));

export default {
  getAll,
  getById,
  post,
  put,
  remove,
};
