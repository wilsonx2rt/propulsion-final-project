export const goPrevPage = (e, previous, action, props) => {
  e.preventDefault();
  if (previous !== null){
    const fetchURL = previous;
    props.dispatch(action(props, fetchURL));
  }
}

export const goNextPage = (e, next, action, props) => {
  e.preventDefault();
  if (next !== null){
    const fetchURL = next;
    props.dispatch(action(props, fetchURL));
  }
}

export const grabModifiedFields = (formPayload) => {
  let changed = [];
  Object.keys(formPayload).map(key => {
    if (formPayload[key].modified) changed.push({[key]: formPayload[key]});
  })
  return changed;
}

export const getFetchBody = (arr) => {
  let body = {};
  arr.map(field => {
    const bodyKey = Object.keys(field)[0];
    if (typeof field[bodyKey].value === 'object'){
      body[bodyKey] = field[bodyKey].value.id;
    }
    else {
      body[bodyKey] = field[bodyKey].value;
    }
  })
  return body;
}

export const resetFormPayload = (componentThis) => {
  const newState = Object.assign({}, componentThis.state);
  Object.keys(newState).map(property => {
    // if (Array.isArray(newState[property])) {
    //   newState[property] = [];
    // }
    if (typeof newState[property] === 'object'){
      Object.keys(newState[property]).map(key => {
        if (newState[property][key].modified) {
          delete newState[property][key].modified;
        }
        if (newState[property][key].value){
          newState[property][key].value = 'Loading';
        }
      });
    }
  })
  componentThis.setState(newState);
}