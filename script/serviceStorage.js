export const getStorage = () => {
  const arr = localStorage.getItem('phonebook') ?
    JSON.parse(localStorage.getItem('phonebook')) : [];
  return arr;
};

export const setStorage = (key, value) => {
  const obj = JSON.stringify(value);
  localStorage.setItem(key, obj);
};

export const removeStorage = (id, data) => {
  id = +id;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      data.splice(i, 1);
    }
  }
  setStorage('phonebook', data);
};
