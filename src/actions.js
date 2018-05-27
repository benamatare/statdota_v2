export function increaseCount() {
  return {
      type: 'INCREASE_COUNT'
    }
}

export function decreaseCount() {
  return {
      type: 'DECREASE_COUNT'
    }
}


export function clearQuery() {
  return {
    type: 'CLEAR_QUERY'
  }
}

export function setQuery(query) {
  return {
    type: 'SET_QUERY', payload: query
  }
}
