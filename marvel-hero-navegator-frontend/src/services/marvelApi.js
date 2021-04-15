const baseURL = 'http://localhost:3001';

const getAllCharacters = async (offset) => {
  const all = await fetch(`${baseURL}character/all/${offset}`);
  const response = await all.json();
  return response;
};

export default {
  getAllCharacters,
};
