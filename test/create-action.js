const {assert} = require('chai');
const createAction = require('../src/create-action');

describe('createAction', () => {
  it('should return object contains type', () => {
    const type = 'ADD_TODO';
    const action = createAction(type);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.isUndefined(action.payload);
  });

  it('should return object with type and payload', () => {
    const type = 'ADD_TODO';
    const payload = 'Learn React.js';
    const action = createAction(type, payload);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.equal(payload, action.payload);
  });

  it('should return object with boolean error', () => {
    const type = 'ADD_TODO';
    const payload = new Error();
    const action = createAction(type, payload, true);

    assert.isObject(action);
    assert.equal(type, action.type);
    assert.equal(payload, action.payload);
    assert.isTrue(action.error);
  });

  it('should return object with meta object', () => {
    const action = createAction('ADD_TODO');

    assert.isObject(action);
    assert.isObject(action.meta);
    assert.lengthOf(Object.keys(action.meta), 0);
  });

  it('should return object with replaced meta object', () => {
    const meta = {pending: true};
    const action = createAction('ADD_TODO', undefined, false, meta);

    assert.isObject(action);
    assert.deepEqual(action.meta, meta);
  });
});
