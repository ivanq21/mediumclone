export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    console.log('Error getting value for key ', key);
    return null;
  }
};

export const setItem = (key, val) => {
  try {
    return localStorage.setItem(key, JSON.stringify(val));
  } catch {
    console.log('Error saving value for key ', key);
  }
};
