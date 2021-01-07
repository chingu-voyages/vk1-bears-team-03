import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import moment from 'moment'

// Initial state
const initialState = {
  assets: [],
  requests: [],
  request: [],
  pendingRequests: [],
  requestCount: [],
  pendingRequestCount: [],
  archivedRequestCount: [],
  assetCount: [],
  userCount: [],
  locations: [],
  departments: [],
  suppliers: [],
  categories: [],
  userCount7Days: [],
  assetCount7Days: [],
  pendingRequestCount7Days: [],
  allArchivedRequestCount7Days: [],
  locationsCount7Days: [],
  departmentsCount7Days: [],
  requestCount1Year: [],
  memberCount1Year: [],
  assetCount1Year: [],
  userRequests: [],
  users: [],
  user: [],
  completedRequests: [],

  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getAssets() {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/assets');
      
      dispatch({
        type: 'GET_ASSETS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ASSET_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteAsset(id) {
    try {
      await axios.delete(`http://localhost:5000/api/v1/assets/${id}`);

      dispatch({
        type: 'DELETE_ASSET',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'ASSET_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addAsset(asset) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('http://localhost:5000/api/v1/assets', asset, config);

      dispatch({
        type: 'ADD_ASSET',
        payload: res.data.data
      });

    } catch (err) {
      dispatch({
        type: 'ASSET_ERROR',
        payload: err.response.data.error
      });
    }

  }

  async function updateAsset(id, asset) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`http://localhost:5000/api/v1/assets/updateasset/${id}`, asset, config);

      dispatch({
        type: 'UPDATE_ASSET',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'ASSET_ERROR',
        payload: err.response.data.error
      });
    }
  }



  async function getLocations() {
    try {
      const res = await axios.get('/api/v1/locations');

      dispatch({
        type: 'GET_LOCATIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteLocation(id) {
    try {
      await axios.delete(`/api/v1/locations/${id}`);

      dispatch({
        type: 'DELETE_LOCATIONS',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }



  async function addLocation(location) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/locations/addlocation', location, config);

      dispatch({
        type: 'ADD_LOCATIONS',
        payload: res.data.data
      });
   
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
    
  } 
  async function getDepartments() {
    try {
      const res = await axios.get('/api/v1/departments');

      dispatch({
        type: 'GET_DEPARTMENTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }



  async function deleteDepartment(id) {
    try {
      await axios.delete(`/api/v1/departments/${id}`);

      dispatch({
        type: 'DELETE_DEPARTMENT',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }



  async function addDepartment(department) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/departments/adddepartment', department, config);

      dispatch({
        type: 'ADD_DEPARTMENT',
        payload: res.data.data
      });
   
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
    
  } 

  async function getSuppliers() {
    try {
      const res = await axios.get('/api/v1/suppliers');

      dispatch({
        type: 'GET_SUPPLIERS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }



  async function deleteSupplier(id) {
    try {
      await axios.delete(`/api/v1/suppliers/${id}`);

      dispatch({
        type: 'DELETE_SUPPLIER',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


  //<----Requests-related Functions----->

  async function getRequests() {
    try {
      const res = await axios.get('/api/v1/requests');
      dispatch({
        type: 'GET_REQUESTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function getCategories() {
    try {
      const res = await axios.get('/api/v1/categories');

      dispatch({
        type: 'GET_CATEGORIES',

        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function getRequest(id) {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/requests/${id}`);
      dispatch({
        type: 'GET_REQUEST',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  //     });
  //   }
  // }
  

  async function deleteCategory(id) {
    try {
      await axios.delete(`/api/v1/categories/${id}`);

      dispatch({
        type: 'DELETE_CATEGORY',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


  async function getPendingRequests() {
    try {
      const res = await axios.get('/api/v1/requests');

      dispatch({
        type: 'GET_PENDING_REQUESTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function getDeniedRequests() {
    try {
      const res = await axios.get('/api/v1/requests');
      dispatch({
        type: 'GET_DENIED_REQUESTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addCategory(category) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/categories/addcategory', category, config);

      dispatch({
        type: 'ADD_CATEGORY',
        payload: res.data.data
      });
   
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


  async function updateRequest(id, request) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.patch(`http://localhost:5000/api/v1/requests/${id}`, request, config);
      dispatch({
        type: 'UPDATE_REQUEST',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteRequest(id) {
    try {
      await axios.delete(`/api/v1/requests/${id}`);

      dispatch({
        type: 'DELETE_REQUESTS',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }


//<======= Fetch Data Counts for Charts/Dashboard =======>

async function getRequestCount() {
  try {
    const res = await axios.get('/api/v1/requests');

    dispatch({
      type: 'GET_REQUEST_COUNT',
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function getPendingRequestCount() {
  try {
    const res = await axios.get('/api/v1/requests');

    dispatch({
      type: 'GET_PENDING_REQUEST_COUNT',
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function getArchivedRequestCount() {
  try {
    const res = await axios.get('/api/v1/requests');

    dispatch({
      type: 'GET_ARCHIVED_REQUEST_COUNT',
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */
async function getAssetCount() {
  try {
    const res = await axios.get('/api/v1/assets');

    dispatch({
      type: 'GET_ASSET_COUNT',
      payload: res.data.data.length
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */
async function getUserCount() {
  try {
    const res = await axios.get('/api/v1/users');

    dispatch({
      type: 'GET_USER_COUNT',
      payload: res.data.data.length
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//<----- FETCH DATA POINTS FOR CHART (Last 7 days) ----->//

async function getUserCount7Days() {
  try {
    const res = await axios.get('/api/v1/users');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_USER_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */

async function getAssetCount7Days() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_ASSET_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */

async function getPendingRequestCount7Days() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_PENDING_REQUEST_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */

async function getAllArchivedRequestCount7Days() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_ALL_ARCHIVED_REQUEST_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */

async function getLocationsCount7Days() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_LOCATIONS_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

//** */

async function getDepartmentsCount7Days() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let subtrahend = 0

    for (let i =0; i<=6; i++) {
    const today = moment().endOf('day');
    let newToday = today.subtract(subtrahend, 'days');
    let data = result.filter(result => moment(result.createdAt) <= newToday)

    count.unshift(data.length)
    subtrahend += 1
    }

    dispatch({
      type: 'GET_DEPARTMENTS_COUNT_7_DAYS',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}


async function getRequestCount1Year() {
  try {
    const res = await axios.get('/api/v1/requests');
    const result = res.data.data
    let count = []
    let addend = 0

    for (let i =0; i<=11; i++) {
    const today = moment().startOf('year');
    let newToday = today.add(addend, 'months');
    let months = newToday.endOf('month')
    let data = result.filter(result => moment(result.createdAt).isSame(months, 'month'))

    count.push(data.length)
    addend += 1
    }
console.log(count)
    dispatch({
      type: 'GET_REQUEST_1_YEAR',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}


async function getMemberCount1Year() {
  try {
    const res = await axios.get('/api/v1/users');
    const result = res.data.data
    let count = []
    let addend = 0

    for (let i =0; i<=11; i++) {
    const today = moment().startOf('year');
    let newToday = today.add(addend, 'months');
    let months = newToday.endOf('month')
    let data = result.filter(result => moment(result.createdAt).isSame(months, 'month'))

    count.push(data.length)
    addend += 1
    }
console.log(count)
    dispatch({
      type: 'GET_MEMBER_1_YEAR',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function getAssetCount1Year() {
  try {
    const res = await axios.get('/api/v1/assets');
    const result = res.data.data
    let count = []
    let addend = 0

    for (let i =0; i<=11; i++) {
    const today = moment().startOf('year');
    let newToday = today.add(addend, 'months');
    let months = newToday.endOf('month')
    let data = result.filter(result => moment(result.createdAt).isSame(months, 'month'))

    count.push(data.length)
    addend += 1
    }
console.log(count)
    dispatch({
      type: 'GET_ASSET_1_YEAR',
      payload: count
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}


async function getUsers() {
  try {
    const res = await axios.get('/api/v1/users');

    dispatch({
      type: 'GET_USERS',
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
} 

async function getUser(id) {
  try {
    const res = await axios.get('/api/v1/users');

    const result = res.data.data
    const filteredUser = result.find(user => user._id === id)

    console.log(filteredUser)

    dispatch({
      type: 'GET_USER',
      payload: filteredUser
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
} 

async function deleteUser(id) {
  try {
    await axios.delete(`http://localhost:5000/api/v1/users/${id}`);

    dispatch({
      type: 'DELETE_USER',
      payload: id
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function getUserRequests(id) {
  try {
    const res = await axios.get('/api/v1/requests');
    const results = res.data.data
    const filteredResults = results.filter(result => result.user_name._id === id)
    const requests = filteredResults.filter(request => request.request_status === 'Approved')

    dispatch({
      type: 'USER_REQUESTS',
      payload: requests
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function getCompletedRequests(id) {
  try {
    const res = await axios.get('/api/v1/requests');
    const results = res.data.data
    const filteredResults = results.filter(result => result.user_name._id === id)
    const requests = filteredResults.filter(request => request.request_status === 'Returned')

    dispatch({
      type: 'COMPLETED_REQUESTS',
      payload: requests
    });
  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}

async function addRequest(borrowedList) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('http://localhost:5000/api/v1/requests', borrowedList, config);

    dispatch({
      type: 'ADD_REQUEST',
      payload: res.data.data
    });

  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }
}


async function addNewUser(user) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/v1/users/register', user, config);

    dispatch({
      type: 'ADD_USER',
      payload: res.data.data
    });

  } catch (err) {
    dispatch({
      type: 'TRANSACTION_ERROR',
      payload: err.response.data.error
    });
  }

}


  return (<GlobalContext.Provider value={{
    assets: state.assets,
    pendingRequests: state.pendingRequests,
    requests: state.requests,
    request: state.request,
    error: state.error,
    loading: state.loading,
    requestCount: state.requestCount,
    pendingRequestCount: state.pendingRequestCount,
    archivedRequestCount: state.archivedRequestCount,
    assetCount: state.assetCount,
    userCount: state.userCount,
    userCount7Days: state.userCount7Days,
    assetCount7Days: state.assetCount7Days,
    pendingRequestCount7Days: state.pendingRequestCount7Days,
    allArchivedRequestCount7Days: state.allRequestCount7Days,
    locationsCount7Days: state.locationsCount7Days,
    departmentsCount7Days: state.departmentsCount7Days,
    requestCount1Year: state.requestCount1Year,
    memberCount1Year: state.memberCount1Year,
    assetCount1Year: state.assetCount1Year,
    deleteAsset,
    addAsset,
    updateAsset,
    getRequests,
    getRequest,
    updateRequest,
    getPendingRequests,
    getDeniedRequests,
    deleteRequest,
    getRequestCount,
    getPendingRequestCount,
    getArchivedRequestCount,
    getAssetCount,
    getUserCount,
    locations: state.locations,
    departments: state.departments,
    suppliers: state.suppliers,
    
    
    getAssets,
    getUserCount7Days,
    getAssetCount7Days,
    getPendingRequestCount7Days,
    getAllArchivedRequestCount7Days,
    getLocationsCount7Days,
    getDepartmentsCount7Days,
    getRequestCount1Year,
    getMemberCount1Year,
    getAssetCount1Year,
    getUsers,
    users: state.users,
    deleteUser,
    getUserRequests,
    userRequests: state.userRequests,
    getUser,
    user: state.user,
    addRequest,
    completedRequests: state.completedRequests,
    getCompletedRequests,
    addNewUser,


  }}>
    {children}
  </GlobalContext.Provider>);
}