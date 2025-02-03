import {
  getAllUsersOfCountry,
  getAllUsersWithDegree,
  getUserByGroups,
  getVideoGamePlayers,
} from "./users.js";

const users = {
  John: {
    age: 24,
    desgination: "Senior Golang Developer",
    interests: ["Chess, Reading Comics, Playing Video Games"],
    qualification: "Masters",
    nationality: "Greenland",
  },
  Ron: {
    age: 19,
    desgination: "Intern - Golang",
    interests: ["Video Games"],
    qualification: "Bachelor",
    nationality: "UK",
  },
  Wanda: {
    age: 24,
    desgination: "Intern - Javascript",
    interests: ["Piano"],
    qualification: "Bachaelor",
    nationality: "Germany",
  },
  Rob: {
    age: 34,
    desgination: "Senior Javascript Developer",
    interests: ["Walking his dog, Cooking"],
    qualification: "Masters",
    nationality: "USA",
  },
  Pike: {
    age: 23,
    desgination: "Python Developer",
    interests: ["Listing Songs, Watching Movies"],
    qualification: "Bachaelor's Degree",
    nationality: "Germany",
  },
};

//Q1 Find all users who are interested in playing video games.
console.log(getVideoGamePlayers(users));
//Q2 Find all users staying in Germany.
console.log(getAllUsersOfCountry(users, "Germany"));
//Q3 Find all users with masters Degree.
console.log(getAllUsersWithDegree(users, "master"));
//Q4 Group users based on their Programming language mentioned in their designation.
console.log(getUserByGroups(users));
