function createAsyncAction(type, promise) {
  return (dispatch) => {
    dispatch({
      type,
      meta: {
        pending: true
      }
    });

    promise.then(
      (payload) => typeof payload === 'function' ? payload(dispatch) : dispatch({type, payload}),
      (payload) => dispatch({type, payload, error: true})
    );
  };
}

export default createAsyncAction;
