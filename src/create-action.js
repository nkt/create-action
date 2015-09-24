function createAction(type, payload, error, meta) {
  return {
    type,
    payload,
    error: Boolean(error),
    meta: meta || {}
  }
}

module.exports = createAction;
