const formateDate = (date) => {
  

  return new Date(date).toLocaleDateString("en-UK");
};

export default formateDate;
