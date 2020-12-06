import React, { useState } from 'react'
import { Route } from 'react-router-dom'
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody,
  CDataTable,
  CButton,
  CRow, CCol, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'

import softwaresData from './SoftwaresData'
import Search from "../search/Search"
import Itemspage from '../itemspage/Itemspage'
// import Button from '../addButton/AddButton'


const Softwares = () => {
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

  const fields = [
    { key: 'id'},
    { key: 'name'},
     'user_name', 'user_role', 'email_address',
    {
      key: 'show_details',
      label: 'Actions',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]
  
  // const getBadge = (status)=>{
  //   switch (status) {
  //     case 'Active': return 'success'
  //     case 'Inactive': return 'secondary'
  //     case 'Pending': return 'warning'
  //     case 'Banned': return 'danger'
  //     default: return 'primary'
  //   }
  // }
  
  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }

  return (
    <CDataTable
      overTableSlot = { 
      <CRow>
        <CCol className="d-flex justify-content-sm-start">
              <Search />
              <Itemspage />
          </CCol>
          <CCol className="d-flex justify-content-sm-end">
          <Route render={({ history}) => (
              <CButton size="sm" color="primary" className="mr-1" onClick= {() => { history.push('/views/software/createnewsoftware') }}>
                    Create New
              </CButton>
                )}/>
          </CCol>
          
      </CRow>
    }
      items={softwaresData}
      fields={fields}
      hover
      pagination
      scopedSlots = {{
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
                  <CButton size="sm" color="dark" className="mr-1">
                    View More
                  </CButton>
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
  )
  }
  
  export default Softwares