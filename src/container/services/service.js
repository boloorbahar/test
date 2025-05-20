export const getFunds = (instance) => {
  return instance()
    .get(`/chests`)
    .then((response) => {
      return response?.data;
    });
};

export const getUser = (instance, id) => {
  return instance()
    .get(`/users/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const createUser = (instance, data) => {
  return instance()
    .post(`/users`, data)
    .then((response) => {
      return response?.data;
    });
};

export const getUserBalance = (instance, id) => {
  return instance()
    .get(`/users/${id}/balances`)
    .then((response) => {
      return response?.data;
    });
};

export const getFundDetail = (instance, id) => {
  return instance()
    .get(`/chests/${id}`)
    .then((response) => {
      return response?.data;
    });
};

export const getFundChart = (instance, id) => {
  return instance()
    .get(`/chests/prices/${id}`)
    .then((response) => {
      return response?.data;
    });
};

export const getTransactions = (instance, id) => {
  return instance()
    .get(`/users/${id}/transactions`)
    .then((response) => {
      return response?.data;
    });
};
