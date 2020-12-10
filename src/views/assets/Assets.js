import React, { useState } from 'react'
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CRow, CCol, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter, CLabel, CSelect
} from '@coreui/react'

import { Route } from 'react-router-dom'
import assetsData from './AssetsData'


const Assets = () => {
const [details, setDetails] = useState([])
// const [items, setItems] = useState(assetsData)

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


const fields = [
  {
    key: 'select',
    label: 'Select',
    _style: { width: '1%'}
  },
  { key: 'id'},
  { key: 'name'},
   'serial_number', 'asset_tag','location', 'status',
  {
    key: 'show_details',
    label: 'Actions',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]
const tableFilter = {
  label: 'Search',
  placeholder: 'Type here..',
}

const getBadge = (status)=>{
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const [modal, setModal] = useState(false)

const toggle = () => {
  setModal(!modal);
}

return (
  <>
  <CRow>
  <CCol className="d-flex justify-content-sm-start">
              <CLabel htmlFor="select">Choose</CLabel>
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
              
  <CCol className="d-flex justify-content-sm-end">
              
  <Route render={({ history}) => (
              <CButton size="md" color="primary" className="mr-1" onClick= {() => { history.push('/views/assets/createnewassets') }}>
                    Create New
              </CButton>
                )}/>
           
            </CCol>
            </CRow>
  <CDataTable
    overTableSlot = { 
          <CRow>
            
              
              
              
          </CRow>
    }
    items={assetsData}
    header
    fields={fields}
    // columnFilter
      tableFilter={tableFilter}
      // footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      // sorter
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
      'status':
      
        (item)=>(
          <td>
            <CBadge color={getBadge(item.status)}>
              {item.status}
            </CBadge>
          </td>
        ),
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
                  {item.name}
                </h4>
                <p className="text-muted">Role: {item.user_role}</p>
                <Route render={({ history}) => (
              <CButton size="sm" color="dark" className="mr-1" onClick= {() => { history.push('/views/assets/viewmoreassets') }}>
                    View More
              </CButton>
                )}/>
                <CButton size="sm" color="primary" className="mr-1">
                  Update
                </CButton>
                
                <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Delete</CButton>
                <CButton size="sm" color="success" className="mr-1">
                  Borrow
                </CButton>
                <CButton size="sm" color="warning" className="mr-1">
                  Return
                </CButton>
                <CModal
                  show={modal}
                  onClose={toggle}
                >
                  <CModalHeader closeButton>Delete User</CModalHeader>
                  <CModalBody>
                    Are you sure you want to delete User?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary">Yes</CButton>{' '}
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
