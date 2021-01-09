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
        pendingRequests: action.payload.filter(request => request.request_status === 'Pending')
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
          case 'GET_USER_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            userCount7Days: action.payload
          }
          case 'GET_ASSET_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            assetCount7Days: action.payload
          }
          case 'GET_PENDING_REQUEST_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            pendingRequestCount7Days: action.payload
          }
          case 'GET_ALL_ARCHIVED_REQUEST_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            allRequestCount7Days: action.payload
          }
          case 'GET_LOCATIONS_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            locationsCount7Days: action.payload
          }
          case 'GET_DEPARTMENTS_COUNT_7_DAYS':
          return {
            ...state,
            loading: false,
            departmentsCount7Days: action.payload
          }
          case 'GET_REQUEST_1_YEAR':
            return {
              ...state,
              loading: false,
              requestCount1Year: action.payload
            }
          case 'GET_MEMBER_1_YEAR':
            return {
              ...state,
              loading: false,
              memberCount1Year: action.payload
            }
          case 'GET_ASSET_1_YEAR':
            return {
              ...state,
              loading: false,
              assetCount1Year: action.payload
            }
            case 'GET_USERS':
              return {
                ...state,
                loading: false,
                users: action.payload
              }
          case 'LOGIN_USER':
             return {
                 ...state,
                 users: [...state.users, action.payload]
              }
          case 'DELETE_USER':
                return {
                  ...state,
                  loading: false,
                  users: action.payload
                }
            case 'USER_REQUESTS':
              return {
                ...state,
                loading: false,
                userRequests: action.payload
              }
              case 'ADD_REQUEST':
              return {
                ...state,
                requests: [...state.requests, action.payload]
            }
            case 'COMPLETED_REQUESTS':
              return {
                ...state,
                loading: false,
                completedRequests: action.payload
              }
            case 'ADD_USER':
              return {
                ...state,
                users: [...state.users, action.payload]
              } 
    default:
      return state;
  }
  


  
}