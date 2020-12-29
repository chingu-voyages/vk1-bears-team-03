export default (state, action) => {
  switch(action.type) {
    case 'GET_ASSETS':
      return {
        ...state,
        loading: false,
        assets: action.payload
      }
    case 'DELETE_ASSET':
      return {
        ...state,
        assets: state.assets.filter(asset => asset._id !== action.payload)
      }
    case 'ADD_ASSET':
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
    case 'UPDATE_ASSET':
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
    case 'ASSET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}