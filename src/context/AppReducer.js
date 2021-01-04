// import Category from "src/views/categories/Category"

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
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'UPDATE_ASSET':
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
      case 'GET_REQUESTS':
      return {
        ...state,
        loading: false,
        assets: action.payload
      }

    case 'ASSET_ERROR':
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
        loading: false,
        assets: action.payload
      }
      case 'GET_REQUEST':
      return {
        ...state,
        loading: false,
        request: action.payload
      }
      case 'GET_PENDING_REQUESTS':
      return {
        ...state,
        loading: false,
        pendingRequests: action.payload.filter(request => request.request_status === 'Approved' || request.request_status === 'Pending')
      }
      case 'GET_DENIED_REQUESTS':
        return {
          ...state,
          loading: false,
          requests: action.payload.filter(request => request.request_status === 'Denied' || request.request_status === 'Archived')
        }
      case 'UPDATE_REQUEST':
        return {
          ...state,
          assets: [...state.assets, action.payload]
        }
      case 'DELETE_REQUEST':
      return {
        ...state,
        requests: state.requests.filter(request => request._id !== action.payload)
      }
      case 'GET_REQUEST_COUNT':
        return {
          ...state,
          loading: false,
          requestCount: action.payload.length
        }
      case 'GET_PENDING_REQUEST_COUNT':
        return {
          ...state,
          loading: false,
          pendingRequestCount: action.payload.filter(request => request.request_status === 'Pending').length
        }
        case 'GET_ARCHIVED_REQUEST_COUNT':
          return {
            ...state,
            loading: false,
            archivedRequestCount: action.payload.filter(request => request.request_status === 'Denied' || request.request_status === 'Archived').length
          }
        case 'GET_ASSET_COUNT':
          return {
            ...state,
            loading: false,
            assetCount: action.payload
          }
          case 'GET_USER_COUNT':
          return {
            ...state,
            loading: false,
            userCount: action.payload
          }

          case 'GET_COMPONENTS':
      return {
        ...state,
        loading: false,
        components: action.payload
      }
    case 'DELETE_COMPONENT':
      return {
        ...state,
        components: state.components.filter(component => component._id !== action.payload)
      }
    case 'ADD_COMPONENT':
      return {
        ...state,
        components: [...state.components, action.payload]
      }
    case 'UPDATE_COMPONENTS':
      return {
        ...state,
        components: [...state.components, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
        // PERMITS
      case 'GET_PERMITS':
      return {
        ...state,
        loading: false,
        permits: action.payload
      }
    case 'DELETE_PERMIT':
      return {
        ...state,
        permits: state.permits.filter(permit => permit._id !== action.payload)
      }
    case 'ADD_PERMIT':
      return {
        ...state,
        permits: [...state.permits, action.payload]
      }
    case 'UPDATE_PERMIT':
      return {
        ...state,
        permits: [...state.permits, action.payload]
      }


      // SOFTWARES
      case 'GET_SOFTWARES':
      return {
        ...state,
        loading: false,
        softwares: action.payload
      }
    case 'DELETE_SOFTWARE':
      return {
        ...state,
        softwares: state.softwares.filter(software => software._id !== action.payload)
      }
    case 'ADD_SOFTWARE':
      return {
        ...state,
        softwares: [...state.softwares, action.payload]
      }
    case 'UPDATE_SOFTWARE':
      return {
        ...state,
        softwares: [...state.softwares, action.payload]
      }
    
      // CONSUMABLES
      case 'GET_CONSUMABLES':
      return {
        ...state,
        loading: false,
        consumables: action.payload
      }
    case 'DELETE_CONSUMABLE':
      return {
        ...state,
        consumables: state.consumables.filter(consumable => consumable._id !== action.payload)
      }
    case 'ADD_CONSUMABLE':
      return {
        ...state,
        consumables: [...state.consumables, action.payload]
      }
    case 'UPDATE_CONSUMABLE':
      return {
        ...state,
        consumables: [...state.consumables, action.payload]
      }
        // ACCESSORIES
      case 'GET_ACCESSORIES':
        return {
          ...state,
          loading: false,
          accessories: action.payload
        }
      case 'DELETE_ACCESSORY':
        return {
          ...state,
          accessories: state.accessories.filter(accessory => accessory._id !== action.payload)
        }
      case 'ADD_ACCESSORY':
        return {
          ...state,
          accessories: [...state.accessories, action.payload]
        }
      case 'UPDATE_ACCESSORY':
        return {
          ...state,
          accessories: [...state.accessories, action.payload]
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