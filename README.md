# Create Action

Helpers for creating FSA compatible actions.

## Installation

```
npm install --save create-action
```

## Usage

### Simple action creator:

```js
const {createAction} = require('create-action');

function addTodo(todo) {
  return createAction('ADD_TODO', todo);
}
```

Async action creator:

```js
const {createAsyncAction} = require('create-action');

function createTodo(todo) {
  return createAsyncAction(
    'CREATE_TODO',
    api.createTodo(todo)
  );
}
```

Async action creator with multiple dispatch:

```js
const {createAsyncAction} = require('create-action');

function fetch() {
  return createAsyncAction(
    'FETCH_USER',
    api.fetchUser()
  );
}

function login(data) {
  return createAsyncAction(
    'LOGIN',
    api.login(data).then(() => {
      return fetch();
    })
  );
}
```

## License
[MIT](LICENSE)
