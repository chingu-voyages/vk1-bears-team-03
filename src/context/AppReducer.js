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
      case 'GET_PENDING_REQUEST_COUNT':
        return {
          ...state,
          loading: false,
          requestCount: action.payload.filter(request => request.request_status === 'Pending').length
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
    default:
      return state;
  }
}