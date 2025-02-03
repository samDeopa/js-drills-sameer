const getEmails = (dataset) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  const emails = dataset.map((person) => person.email);
  if (emails.length) {
    return emails;
  }
  return "No emails Found";
};
const getHobbiesOfAge = (dataset, age) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  if (!age || isNaN(age) || age <= 0) {
    return "Please enter a valid age.";
  }

  const data = dataset.filter((person) => person.age == age);
  const hobbies = data.map((person) => person.hobbies);
  if (hobbies.length) {
    return hobbies;
  }
  return "No Hobbies found";
};

const getAustralianStudents = (dataset) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  const data = dataset.filter(
    (person) => person.isStudent && person.country == "Australia"
  );
  const students = data.map((person) => person.name);
  if (students.length) {
    return students;
  }
  return "No Australian Students Found";
};
const getCityAndName = (dataset, index) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  if (index < 0 || index >= dataset.length) {
    return "Index out of bounds.";
  }
  return { name: dataset[index].name, city: dataset[index].city };
};
const printAllAge = (dataset) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  for (let person of dataset) {
    console.log(` ${person.name}'s age ${person.age}`);
  }
};
const getFirstHobby = (dataset) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  const hobbies = dataset.map((person) => {
    if (person.hobbies) {
      return `${person.name}'s primary hobby is ${person.hobbies[0]}`;
    }
  });
  return hobbies.length ? hobbies : "No hobbies Found!";
};
const getEmailOfAge = (dataset, age) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  if (age <= 0 || isNaN(age)) {
    return "Please enter a vaid age.";
  }
  const filteredData = dataset.filter((person) => person.age == age);
  const emails = filteredData.map(
    (person) => `${person.name}'s email is ${person.email}`
  );
  return emails.length ? emails : "No Emails Found";
};
const logAllCityAndCountries = (dataset) => {
  const datasetCheck = checkDataset(dataset);
  if (datasetCheck) {
    return datasetCheck;
  }
  dataset.forEach((person) => {
    console.log(
      `${person.name}'s city: ${person.city}, country: ${person.country}`
    );
  });
};

function checkDataset(dataset) {
  if (!dataset || dataset.length == 0) {
    if (!Array.isArray(dataset)) return "Dataset not valid!";
    else return "Dataset is Empty.";
  }
  return;
}
export {
  getEmails,
  getHobbiesOfAge,
  getAustralianStudents,
  getCityAndName,
  printAllAge,
  getFirstHobby,
  getEmailOfAge,
  logAllCityAndCountries,
};
