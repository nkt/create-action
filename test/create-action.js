const {assert} = require('chai');
const createAction = require('../src/create-action');

describe('createAction', () => {
  it('should return an object with a type', () => {
    const type = 'ADD_TODO';
    const action = createAction(type);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.deepEqual(Object.keys(action), ['type']);
  });

  it('should return an object with a type and payload', () => {
    const type = 'ADD_TODO';
    const payload = 'Learn React.js';
    const action = createAction(type, payload);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.equal(payload, action.payload);
    assert.deepEqual(Object.keys(action), ['type', 'payload']);
  });

  it('should return an object with an error flag', () => {
    const type = 'ADD_TODO';
    const payload = new Error();
    const action = createAction(type, payload);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.equal(payload, action.payload);
    assert.isTrue(action.error);
    assert.deepEqual(Object.keys(action), ['type', 'error', 'payload']);
  });

  it('should return an object with some meta', () => {
    const meta = {pending: true};
    const action = createAction('ADD_TODO', undefined, meta);

    assert.isObject(action);
    assert.deepEqual(action.meta, meta);
    assert.deepEqual(Object.keys(action), ['type', 'payload', 'meta']);
  });
});
