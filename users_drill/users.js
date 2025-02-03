const getVideoGamePlayers = (users) => {
  const checkUsers = validateUsers(users);
  if (checkUsers) {
    return checkUsers;
  }
  let result = [];
  for (let user in users) {
    if (
      users[user].interests.some((interest) =>
        interest.toLowerCase().includes("video game")
      )
    ) {
      result.push(user);
    }
  }
  if (result.length) {
    return result;
  }
  return `No user found of interests `;
};

const getAllUsersOfCountry = (users, country) => {
  const checkUsers = validateUsers(users);
  if (checkUsers) {
    return checkUsers;
  }
  if (typeof country != "string") {
    return "Please enter a valid country string";
  }
  let result = [];
  for (let user in users) {
    if (users[user].nationality.toLowerCase() === country.toLowerCase()) {
      result.push(user);
    }
  }
  if (result.length) {
    return result;
  }
  return `No user found of Nationality ${country}`;
};

const getAllUsersWithDegree = (users, degree) => {
  const checkUsers = validateUsers(users);
  if (checkUsers) {
    return checkUsers;
  }
  let result = [];
  for (let user in users) {
    if (
      users[user].qualification.toLowerCase().includes(degree.toLowerCase())
    ) {
      result.push(user);
    }
  }
  if (result.length) {
    return result;
  }
  return `No user found with ${degree}`;
};
const getUserByGroups = (users) => {
  const checkUsers = validateUsers(users);
  if (checkUsers) {
    return checkUsers;
  }
  const groupedUsers = {
    Python: [],
    Java: [],
    Javascript: [],
    GoLang: [],
  };

  for (let user in users) {
    for (let language in groupedUsers) {
      if (
        users[user].desgination.toLowerCase().includes(language.toLowerCase())
      ) {
        groupedUsers[language].push(user);
      }
    }
  }
  return groupedUsers;
};
function validateUsers(users) {
  if (!users) {
    return "Invalid users!";
  }
  if (typeof users != "object" || Array.isArray(users)) {
    return "Invalue Users Object.";
  }
  return;
}
export {
  getVideoGamePlayers,
  getAllUsersOfCountry,
  getAllUsersWithDegree,
  getUserByGroups,
};
