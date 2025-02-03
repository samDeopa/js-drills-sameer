const getCarById = (inventory, id) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }

  if (!id || isNaN(id)) {
    return "Please Enter a valid ID";
  }
  const car = inventory.find((car) => car.id == id);
  return `Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`;
};

const getLastCarInInventory = (inventory) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }

  const car = inventory[inventory.length - 1];
  return `Last car is a ${car.car_make} ${car.car_model}`;
};

const sortInventory = (inventory) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }

  const carModels = inventory.map((car) => car.car_model);
  carModels.sort();
  return carModels;
};

const getAllCarYears = (inventory) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }
  const carYears = inventory.map((car) => car.car_year);
  return carYears;
};

const getCarsBefore2000 = (inventory) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }
  const carYears = getAllCarYears(inventory);
  let olderCarsCount = carYears.reduce((count, year) => {
    if (year < 2000) {
      return count + 1;
    }
    return count;
  }, 0);

  const olderCars = inventory.filter((car) => car.car_year < 2000);
  return olderCars;
};

const getBmwAndAudi = (inventory) => {
  const inventoryValidation = validateInventoryArray(inventory);
  if (inventoryValidation) {
    return inventoryValidation;
  }
  const cars = inventory.filter((car) =>
    ["BMW", "Audi"].includes(car.car_make)
  );
  return JSON.stringify(cars);
};

function validateInventoryArray(inventory) {
  if (!inventory || !Array.isArray(inventory)) {
    return "Please provide a valid inventory Array!";
  }
  if (inventory.length == 0) {
    return "Empty Inventory";
  }
  return;
}

module.exports = {
  getCarById,
  getLastCarInInventory,
  sortInventory,
  getAllCarYears,
  getCarsBefore2000,
  getBmwAndAudi,
};
