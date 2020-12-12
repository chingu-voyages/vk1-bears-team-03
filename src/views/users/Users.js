import React, { useState } from 'react'

import {
  // CBadge,
  CRow, CCol,
  CCardBody,
  CDataTable,
  CButton, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'
import { Route, Link } from 'react-router-dom'

import AddButton from '../addButton/AddButton'
import usersData from "./UsersData"
import PrintButton from '../printbutton/PrintButton'

const Users = () => {
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
const [modal, setModal] = useState(false)

const toggle = () => {
  setModal(!modal);
}

return (
  <>
  <AddButton location='/users/adduser' />

  <CDataTable
    items={usersData}
    tableFilter={tableFilter}
    itemsPerPage={5}
    itemsPerPageSelect
    fields={fields}
    hover
    pagination
    scopedSlots = {{
      'select' : () =>{
        return (
        <div className="d-flex justify-content-center align-items-center">
          <input id ="select" type="checkbox">
          </input>
        </div>
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
                  {item.name}
                </h4>
                <p className="text-muted">Role: {item.user_role}</p>
                <Route render={({ history}) => (
              <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/views/seeallassets') }}>
                    See All Issued
              </CButton>
                )}/>
                <Route render={({ history}) => (
                  <CButton size="sm" color="dark" className="mr-1" onClick={() => { 
                    history.push(`user/${item.id}`) }
                    }>
                      View Profile
                  </CButton>  
                 )}/>
                <Route render={({ history}) => (
                <CButton size="sm" color="primary" className="mr-1" onClick= {() => { history.push('/views/users/profile') }}>
                Update
              </CButton>
                )}/>
               
                
                <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Delete</CButton>
                <PrintButton/>
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
export default Users