import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  assets: [],
  requests: [],
  request: [],
  pendingRequests: [],
  requestCount: [],
  archivedRequestCount: [],
  assetCount: [],
  userCount: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/assets');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteAsset(id) {
    try {
      await axios.delete(`/api/v1/assets/${id}`);

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
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
      const res = await axios.post('/api/v1/assets', asset, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });

    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }

  }

  async function updateAsset(id, asset) {
    console.log(id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/assets/updateasset/${id}`, asset, config);

      dispatch({
        type: 'UPDATE_ASSET',
        payload: res.data.data
      });
      console.log("This is from res.data", res.data.data)
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


  async function updateRequest(id, request) {
    console.log(id)
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
    getTransactions,
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
  }}>
    {children}
  </GlobalContext.Provider>);
}