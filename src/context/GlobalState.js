import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  assets: [],
  locations: [],
  departments: [],
  suppliers: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Assets Actions
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
        asyncpayload: err.response.data.error
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




  async function updateLocation(id, location) {
    console.log(id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/locations/updatelocation/${id}`, location, config);

      dispatch({
        type: 'UPDATE_LOCATIONS',
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



  async function updateDepartment(id, department) {
    console.log(id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/departments/updatedepartment/${id}`, department, config);

      dispatch({
        type: 'UPDATE_DEPARTMENT',
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



  async function addSupplier(supplier) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/suppliers/addsupplier', supplier, config);

      dispatch({
        type: 'ADD_SUPPLIER',
        payload: res.data.data
      });
   
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
    
  } 



  async function updateSupplier(id, supplier) {
    console.log(id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/suppliers/updatesupplier/${id}`, supplier, config);

      dispatch({
        type: 'UPDATE_SUPPLIER',
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



  async function updateCategory(id, category) {
    console.log(id)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(`/api/v1/categories/updatecategory/${id}`, category, config);

      dispatch({
        type: 'UPDATE_CATEGORY',
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



  return (<GlobalContext.Provider value={{
    assets: state.assets,
    locations: state.locations,
    departments: state.departments,
    suppliers: state.suppliers,
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteAsset,
    addAsset,
    updateAsset,
    getLocations,
    deleteLocation,
    addLocation,
    updateLocation,
    getDepartments,
    addDepartment,
    deleteDepartment,
    updateDepartment,
    getSuppliers,
    addSupplier,
    deleteSupplier,
    updateSupplier,
    getCategories,
    deleteCategory,


  }}>
    {children}
  </GlobalContext.Provider>);
}