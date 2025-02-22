const config = {
  numberSeparator: (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};

export default config;
