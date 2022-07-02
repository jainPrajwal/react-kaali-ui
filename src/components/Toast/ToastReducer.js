const initialToastState = [];
const toastReducer = (state, action) => {
  switch (action.type) {
    case `SET_EXIT`:
      return state.map((toast) => {
        if (toast.id === action.payload.id) {
          return { ...toast, exit: true };
        }
        return toast;
      });
    case "ADD_TOAST":
      return [...state, { ...action.payload.toast }];

    case "REMOVE_TOAST":
      return state.filter((toast) => toast.id !== action.payload.id);

    default:
      return state;
  }
};

export { initialToastState, toastReducer };
