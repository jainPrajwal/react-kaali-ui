export const handleCloseToast = ({ toastDispatch, id }) => {
  toastDispatch({
    type: `SET_EXIT`,
    payload: {
      id,
    },
  });
  setTimeout(() => {
    toastDispatch({
      type: "REMOVE_TOAST",
      payload: {
        id,
      },
    });
  }, 400);
};
