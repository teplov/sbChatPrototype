export default (state = 0, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return !!action.length;
    default:
      return state;
  }
};
