import {
  checkArrayNotEmptyFunc,
  saveDataToLocalStorageFunc,
  getDataFromLocalStorageFunc,
} from "@/interfaces";

/**
 * Checks whether an array is not empty.
 *
 * @param params - The array to be checked.
 * @returns True if the array is not empty, false otherwise.
 */
const checkArrayNotEmpty: checkArrayNotEmptyFunc = (params) => {
  // Check if 'params' is an array
  if (!Array.isArray(params)) {
    return false;
  }

  // Check if the array 'params' has data
  if (params.length === 0) {
    return false;
  }

  return true;
};

function isWindowSize1024(): boolean {
  // Get the current window width
  const windowWidth: number = window.innerWidth;

  // Check if the window width is less than 1024px
  return windowWidth < 1024;
}

function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const cloneArray: any[] = [];
    for (const item of obj) {
      cloneArray.push(deepClone(item));
    }
    return cloneArray as T;
  }

  const cloneObj = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }

  return cloneObj;
}

// Function to save data to localStorage
const saveDataToLocalStorage: saveDataToLocalStorageFunc = (key, data) => {
  try {
    // Convert the data to a JSON string before storing it in localStorage
    const jsonData = JSON.stringify(data);

    // Store the data in localStorage with a specific key
    localStorage.setItem(key, jsonData);

    // Return true if the save was successful
    return true;
  } catch (error) {
    // Handle any errors that occur
    console.error("Error when saving data to localStorage:", error);
    return false;
  }
};

// Function to retrieve data from localStorage
const getDataFromLocalStorage: getDataFromLocalStorageFunc = (key) => {
  try {
    // Get data from localStorage using the specified key
    const jsonData = localStorage.getItem(key);

    // If data exists, parse it from a JSON string to a JavaScript object and return it
    if (jsonData) {
      return JSON.parse(jsonData);
    }

    // Return null if data is not found
    return null;
  } catch (error) {
    // Handle any errors that occur
    console.error("Error when retrieving data from localStorage:", error);
    return null;
  }
};

export {
  checkArrayNotEmpty,
  isWindowSize1024,
  deepClone,
  saveDataToLocalStorage,
  getDataFromLocalStorage,
};
