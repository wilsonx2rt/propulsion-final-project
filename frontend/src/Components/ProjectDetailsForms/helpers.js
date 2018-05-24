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
    return null;
  })
  return changed;
}

export const getFetchBody = (arr) => {
  let body = {};
  arr.map(field => {
    const bodyKey = Object.keys(field)[0];
    if (typeof field[bodyKey].value === 'object'){
      if (bodyKey === 'project_management'){
        body[bodyKey] = [];
        field[bodyKey].value.map(manager => {
          body[bodyKey].push(manager.id)
          return null;
        })
      }
      else {
        body[bodyKey] = field[bodyKey].value.id;
      }
    }
    else {
      body[bodyKey] = field[bodyKey].value;
    }
    return null;
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
          newState[property][key].value = '';
        }
        return null;
      });
      if (property === 'all_managers'){
        const empty = [];
        newState[property] = empty;
      }
    }
    return null;
  })
  componentThis.setState(newState);
}

export const hasPM = (arr, manager) => {
  let managerIsInArray = false;
  arr.map(item => {
    if(item.id === manager.id) managerIsInArray = true;
    return null;
  })
  return managerIsInArray;
}

export const removePM = (arr, manager) => {
  let result = arr.filter(item => item.id !== manager.id);
  return result;
}

export const replaceNullWithEmptyString = (arr) => {
  let result;
  if (Array.isArray(arr)){
    result = arr.map(property => {
      const newProperty = Object.assign({}, property);
      Object.keys(property).map(entry => {
        if (property[entry] === null || property[entry] === undefined){
          newProperty[entry] = '';
        }
        return entry;
      })
      return newProperty;
    });
  }
  else if (typeof arr === 'object') {
    Object.keys(arr).map(property => {
      if (arr[property] === null || arr[property] === undefined) {
        arr[property] = '';
      }
      return property;
    })
    result = arr;
  }
return result;
}