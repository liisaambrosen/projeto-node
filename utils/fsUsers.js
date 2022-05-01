const fs = require('fs').promises;
const path = require('path');

const USERS_PATH = path.join(__dirname, '..', '/', 'db_users.json');

const getUsers = async () => {
  const result = await fs.readFile(USERS_PATH, 'utf-8');
  return JSON.parse(result);
};

const setUsers = async (updatedUsers) => {
  await fs.writeFile(USERS_PATH, JSON.stringify(updatedUsers));
};

module.exports = {
  getUsers,
  setUsers,
}