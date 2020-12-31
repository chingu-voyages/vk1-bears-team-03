// import Category from "src/views/categories/Category"

export default (state, action) => {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        assets: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        assets: state.assets.filter(asset => asset._id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
    case 'UPDATE_ASSET':
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }

      case 'GET_LOCATIONS':
      return {
        ...state,
        loading: false,
        locations: action.payload
      }
    case 'DELETE_LOCATIONS':
      return {
        ...state,
        locations: state.locations.filter(location => location._id !== action.payload)
      }
    case 'ADD_LOCATIONS':
      return {
        ...state,
        locations: [...state.locations, action.payload]
      }
    case 'UPDATE_LOCATIONS':
      return {
        ...state,
        locations: [...state.locations, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
      case 'GET_DEPARTMENTS':
      return {
        ...state,
        loading: false,
        departments: action.payload
      }
    case 'DELETE_DEPARTMENT':
      return {
        ...state,
        departments: state.departments.filter(department => department._id !== action.payload)
      }
    case 'ADD_DEPARTMENT':
      return {
        ...state,
        departments: [...state.departments, action.payload]
      }
    case 'UPDATE_DEPARTMENT':
      return {
        ...state,
        departments: [...state.departments, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }

      case 'GET_SUPPLIERS':
      return {
        ...state,
        loading: false,
        suppliers: action.payload
      }
    case 'DELETE_SUPPLIER':
      return {
        ...state,
        suppliers: state.suppliers.filter(supplier => supplier._id !== action.payload)
      }
    case 'ADD_SUPPLIER':
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload]
      }
    case 'UPDATE_SUPPLIER':
      return {
        ...state,
        suppliers: [...state.suppliers, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }


      case 'GET_CATEGORIES':
      return {
        ...state,
        loading: false,
        categories: action.payload
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(category => category._id !== action.payload)
      }
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload]
      }
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        suppliers: [...state.categories, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }





      
    default:
      return state;
  }


  
}