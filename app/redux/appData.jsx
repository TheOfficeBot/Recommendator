import { combineReducers } from 'redux'

const location = (state={}, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION': return { latitude: 0.0, longitude: 0.0, name: 'temp' }
  }
  return state
}

const searchTerm = (state='', action) => {
  switch (action.type) {
    case 'CHANGE_TERM': return 'temp'
  }
  return state
}

const appData = combineReducers({ loc: location, term: searchTerm })
export default appData

