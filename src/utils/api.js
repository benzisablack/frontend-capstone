const fetchAPI = (date) => {
  let result = [];

  const openTime = (date.getDay() === 6 || date.getDay === 0) ? 17 : 10
  const closeTime = (date.getDay() === 6 || date.getDay === 0) ? 23 : 18

  for (let i = openTime; i <= closeTime; i++) {
    if (Math.random() < 0.5) {
      result.push(i + ':00')
    };
    if (Math.random() < 0.5) {
      result.push(i + ':30')
    };
  }
  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};