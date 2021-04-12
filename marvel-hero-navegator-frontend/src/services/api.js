const contentType = {
  'Content-Type': 'application/json',
};

const fetchRegistration = async (name, email, password) => {
  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => res.json());

  if (response.message) return false;
  return true;
};

module.exports = {
  fetchRegistration,
};
