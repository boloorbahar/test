const config = {
  numberSeparator: (number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  sortArray: (array, key) => {
    if (array) {
      let arrayCopy = [...array];
      return arrayCopy?.sort((a, b) => a[key] - b[key]);
    }
  },
};

export default config;
