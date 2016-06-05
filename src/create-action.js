function createAction(...args) {
  const [type, payload, meta] = args;
  const action = { type };

  if (args.length > 1) {
    if (payload instanceof Error) {
      action.error = true;
    }

    action.payload = payload;
  }

  if (args.length > 2) {
    action.meta = meta;
  }

  return action;
}

export default createAction;
