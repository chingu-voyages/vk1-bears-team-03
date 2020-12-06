import React, { useState } from 'react'
import {
  CCardBody,
  CDataTable,
  CButton,
  CRow, CCol, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'

import requestsData from './RequestsData'
import Search from "../search/Search"
import Itemspage from '../itemspage/Itemspage'
import Button from '../addButton/AddButton'


const Requests = () => {
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
    { key: 'user'},
     'item_name', 'request_type', 'request_date',
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
    <CDataTable
      overTableSlot = { 
      <CRow>
        <CCol className="d-flex justify-content-sm-start">
              <Search />
              <Itemspage />
          </CCol>
          <CCol className="d-flex justify-content-sm-end">
          {/* <Route render={({ history}) => ( */}
            <Button label = "Create New"/>
          {/* // )} /> */}
          </CCol>
          
      </CRow>
    }
      items={requestsData}
      fields={fields}
      hover
      pagination
      scopedSlots = {{
        // 'status':
        //   (item)=>(
        //     <td>
        //       <CBadge color={getBadge(item.status)}>
        //         {item.status}
        //       </CBadge>
        //     </td>
        //   ),
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
                  <CButton size="sm" color="primary" className="mr-1">
                    Approve
                  </CButton>
                  <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Deny</CButton>
                  <CButton size="sm" color="dark" className="mr-1">
                    View Request Details
                  </CButton>
                  <CModal
                    show={modal}
                    onClose={toggle}
                  >
                    <CModalHeader closeButton>Deny Request</CModalHeader>
                    <CModalBody>
                      Are you sure you want to deny the request?
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
  
  export default Requests
