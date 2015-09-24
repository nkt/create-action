function createAsyncAction(type, promise) {
  return (dispatch) => {
    dispatch({
      type,
      meta: {
        pending: true
      }
    });

    promise.then(
      (payload) => isFunction(payload) ? payload(dispatch) : dispatch({type, payload}),
      (payload) => dispatch({type, payload, error: true})
    );
  };
}

module.exports = createAsyncAction;