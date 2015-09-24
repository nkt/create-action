const {assert} = require('chai');
const createAsyncAction = require('../src/create-async-action');

describe('createAsyncAction', () => {
  it('should return function', () => {
    const action = createAsyncAction('FETCH', Promise.resolve());

    assert.isFunction(action);
  });

  it('should call dispatch with penging and payload', (done) => {
    const type = 'FETCH';
    const payload = {};
    const promise = Promise.resolve(payload);
    const asyncAction = createAsyncAction(type, promise);

    const actions = [];
    asyncAction((action) => {
      actions.push(action);
    });

    promise.then(() => {
      assert.lengthOf(actions, 2);
      assert.deepEqual(actions[0], {type, meta: {pending: true}});
      assert.deepEqual(actions[1], {type, payload});
    }).then(done, done);
  });

  it('should call dispatch with penging and error', (done) => {
    const type = 'FETCH';
    const payload = new Error();
    const promise = Promise.reject(payload);
    const asyncAction = createAsyncAction(type, promise);

    const actions = [];
    asyncAction((action) => {
      actions.push(action);
    });

    promise.then(() => {
      assert.lengthOf(actions, 2);
      assert.deepEqual(actions[0], {type, meta: {pending: true}});
      assert.deepEqual(actions[1], {type, payload, error: true});
    }).catch((e) => {
      if (e !== payload) {
        throw e;
      }
    }).then(done, done);
  });
});
