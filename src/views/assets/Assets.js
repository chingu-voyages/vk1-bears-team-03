import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CRow, CCol, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter, CSelect
} from '@coreui/react'
import Images from '../../uploads/images'
import { Route } from 'react-router-dom'
import AddButton from '../addButton/AddButton'

import dateFormat from 'dateformat'

const Assets = () => {



const { assets, getAssets, deleteAsset } = useContext(GlobalContext)
  useEffect(() => {
    getAssets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

const [details, setDetails] = useState([])

const toggleDetails = (index) => {

  const position = details.indexOf(index)
  let newDetails = details.slice()
  if (position !== -1) {
    newDetails.splice(position, 1)
  } else {
    newDetails = [...details, index]
  }
  setDetails(newDetails)
}

const tableFilter = {
  label: 'Search',
  placeholder: 'type here...'
}
const fields = [
  {
    key: 'select',
    label: 'Select',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  },
  {
    key: 'asset_file',
    label: 'Asset',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  },
  // { key: '_id'},
  { key: 'asset_name'},
   'asset_serial', 'asset_category',
   {
     key: 'warranty',
     label: 'Warranty Date',
     sorter: false,
     filter: false
   },
   {
    key: 'status',
    label: 'Asset Status',
    sorter: false,
    filter: false
  },
  {
    key: 'show_details',
    label: 'Actions',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  },

]

const getBadge = (status)=>{
  console.log("This is Status from getBadge", status)
  switch (status) {
    case 'Available': return 'success'
    case 'Borrowed': return 'secondary'
    case 'Damaged': return 'danger'
    default: return 'primary'
  }
}

const [modal, setModal] = useState(false)

const toggle = () => {
  setModal(!modal);
}

return (
  <>
  <CRow className="mb-3">
    
    <CCol className="d-flex justify-content-sm-start">
      <AddButton location='/assets/addasset' />
           
    </CCol>
    <CCol className="d-flex justify-content-sm-end">
              <CCol xs="12" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">Generate Labels</option>
                      <option value="1">Bulk Borrow</option>
                    </CSelect>
                    
                  </CCol>
              <Route render={({ history}) => (
                  <CButton size="md" color="primary" className="mr-1" onClick= {() => { history.push('/views/assets/createnewassets') }}>
                        Go
                  </CButton>
                )}/>
    </CCol>
              
  </CRow>
  <CDataTable
    items={assets}
    columnFilterSlot={assets.asset_category}
    tableFilter={tableFilter}
    itemsPerPage={5}
    itemsPerPageSelect
    header  
    fields={fields}
    hover
    pagination
    
    scopedSlots = {{
      'select' : () =>{
        return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <input id ="select" type="checkbox">
          </input>
        </div>
        )
      },
      'asset_file' : (item) =>(
        <Images item={item}/>
      ),
      'status':
      
        (item)=>(
          <td>
            <CBadge color={getBadge(item.asset_status)}>
              {item.asset_status}
            </CBadge>
          </td>
        ),
        'warranty': (item) =>{
          return (
            <td>{dateFormat(item.asset_warrantydate, "longDate")}</td>
          )
        },
      'show_details':
        (item, index)=>{
          return (
            <td className="py-2">
              
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{toggleDetails(index)}}
              >
                {details.includes(index) ? 'Hide' : 'Show'}
              </CButton>
            </td>
            )
        },
      'details':
          (item, index)=>{
            return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>
                  {item.asset_name}
                </h4>
                <Route render={({ history}) => (
              <CButton size="sm" color="dark" className="mr-1" onClick= {() => { history.push(`/assets/viewmore/${item._id}`) }}>
                    View More
              </CButton>
                )}/>
                 <Route render={({ history}) => (
                   <CButton size="sm" color="primary" className="mr-1" onClick= {() => { 
                    history.push(`/assets/updateasset/${item._id}`) 
                    }}>
                        Update
                  </CButton>
                  )}/>
                <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Delete</CButton>
                <Route render={({ history}) => (
              <CButton size="sm" color="success" className="mr-1" onClick= {() => { history.push('/views/assets/borrowassets') }}>
                    Borrow
              </CButton>
                )}/>
                
                <Route render={({ history}) => (
              <CButton size="sm" color="warning" className="mr-1" onClick= {() => { history.push('/views/assets/returnassets') }}>
                    Return
              </CButton>
                )}/>
                <CModal
                  show={modal}
                  onClose={toggle}
                >
                  <CModalHeader closeButton>Delete User</CModalHeader>
                  <CModalBody>
                    Are you sure you want to delete User?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary"  onClick={() => {
                      deleteAsset(item._id)
                      toggle()
                  }}>Yes</CButton>{' '}
                    <CButton
                      color="secondary"
                      onClick={toggle}
                    >Cancel</CButton>
                  </CModalFooter>
                </CModal>
              </CCardBody>
            </CCollapse>
          )
        }
        
    }}
        
  />

          
  </>
)
}
export default Assets
