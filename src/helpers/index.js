const setId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return random + date;
};

const dateFormatter = (date) => {
  const now = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return now.toLocaleDateString("es-ES", options);
};

export { setId, dateFormatter };
