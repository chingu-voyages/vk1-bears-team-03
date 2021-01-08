import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {CBadge, CContainer, CRow, CCol, CCardHeader, CCardBody, CCardFooter, CInput, CCard, CButton, CModal, CModalHeader, CModalBody, CModalFooter, CDataTable, CCollapse, CCardTitle} from '@coreui/react'
import { Route } from 'react-router-dom'
import profile from './profile.png'
import dateFormat from 'dateformat'

import "src/scss/_custom.scss"

const Profile = ({match}) => {

  const { userRequests, getUserRequests, user, getUser, updateRequest, completedRequests, getCompletedRequests } = useContext(GlobalContext)




  useEffect(() => {
      getUserRequests(match.params.id)
      getUser(match.params.id)
      getCompletedRequests(match.params.id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const userData = user
  const [details, setDetails] = useState([])

  const getBadge = (status)=>{
    switch (status) {
      case 'Approved': return 'success'
      case 'Pending': return 'primary'
      case 'Denied': return 'danger'
      case 'Archived': return 'secondary'
      case 'Returned': return 'info'
      default: return 'primary'
    }
  }
 
  
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
      key: '_id',
      label: 'Request ID',
      _style: { width: '15%' },
    },
    { 
      key: 'user_name',
      label: 'Requested By',
      sorter: false,
      filter: true
    },
    {
      key: 'item_name',
      label: 'Item Name'
    },
    'request_type', 
    { 
      key: 'request_status', 
      label: 'Request Status'
    },
    {
      key: 'request_date',
      label: 'Request Date'
    }, 
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const fields2 = [
    { 
      key: '_id',
      label: 'Request ID',
      _style: { width: '15%' },
    },
    { 
      key: 'user_name',
      label: 'Requested By',
      sorter: false,
      filter: true
    },
    {
      key: 'item_name',
      label: 'Item Name'
    },
    'request_type', 
    { 
      key: 'request_status', 
      label: 'Request Status'
    },
    {
      key: 'request_date',
      label: 'Request Date'
    }, 
  ]
  
  
  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }
    return (
        <CContainer fluid>
        <CRow>
          <CCol sm = "4">
            <CCardHeader className="text-center">
              <img src={profile} className="rounded mx-auto d-block" alt="Profile"></img>
              <h3 className="my-1"> Name: {user.first_name} {user.last_name} </h3>
              <p>{user.email}</p>
            </CCardHeader>

          </CCol>
          <CCol>
            <CCard>
            <CCardHeader>
                Profile Details
            </CCardHeader>
            <CCardBody>
              <CRow className = "my-2">
                <CCol>
                  <CInput label="fName" placeholder={user.first_name} disabled />
                </CCol>
                <CCol>
                  <CInput label="lName" placeholder={user.last_name} disabled/>
                </CCol>
              </CRow>
              <CRow className = "my-2">
                <CCol>
                  <CInput label="email" placeholder={user.email} disabled/>
                </CCol>
                <CCol>
                  <CInput label="username" placeholder={user.username} disabled/>
                </CCol>
              </CRow>
            </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow className='mt-3'>
          <CCol>
            <CCardFooter>
              <CCardTitle>
                Approved Requests
              </CCardTitle>
              <CDataTable
                items={userRequests}
                fields={fields}
                hover
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedSlots = {{
                  'user_name':
                  (item)=>(
                    <td>
                      {item.user_name.first_name} {item.user_name.last_name}
                    </td>
                  ),
                'item_name':
                  (item)=>(
                    <td>
                      {item.item_name.asset_name}
                    </td>
                  ),
                'request_status':
                  (item)=>(
                    <td>
                    <CBadge color={getBadge(item.request_status)}>
                      {item.request_status}
                    </CBadge>
                    </td>
                  ),  
                'request_date':
                  (item)=>(
                    <td>
                      {dateFormat(item.request_date, "mmmm dd, yyyy")}
                    </td>
                  ),
                  'show_details':
                  (item, index)=>( 
                    <td>
                      <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={toggle}
                          >
                            Return
                          </CButton>
                          <CModal
                            show={modal}
                            onClose={toggle}
                          >
                          <CModalHeader closeButton>Return this Asset</CModalHeader>
                            <CModalBody>
                              Are you sure you want to return this item?
                            </CModalBody>
                          <CModalFooter>
                            <CButton color="primary"  onClick={() => {
                                
                                const updatedRequest = {
                                  request_type: 'Return',
                                  request_status: 'Pending'
                                }
                                console.log("This is the selected item", item)
                                updateRequest(item._id, updatedRequest)
                                toggle()
                                alert("Return request successfully submitted!")
                                window.location.reload()
                                toggle()
                              }}>Yes</CButton>{' '}
                            <CButton
                              color="secondary"
                              onClick={toggle}
                            >Cancel</CButton>
                        </CModalFooter>
                      </CModal>
                    </td>
                  ),
                  // 'show_details':
                  //   (item, index)=>{
                  //     return (
                  //       <td className="py-2">
                  //         <CButton
                  //           color="primary"
                  //           variant="outline"
                  //           shape="square"
                  //           size="sm"
                  //           onClick={()=>{toggleDetails(index)}}
                  //         >
                  //           {details.includes(index) ? 'Hide' : 'Show'}
                  //         </CButton>
                  //       </td>
                  //       )
                  //   },
                  // 'details':
                  //     (item, index)=>{
                  //       return (
                  //       <CCollapse show={details.includes(index)}>
                  //         <CCardBody>
                  //           <h4>
                  //             {item.name}
                  //           </h4>
                  //           <p className="text-muted">Role: <b>{item.user_role}</b></p>
                  //           <CButton size="sm" color="info" className="mr-1">
                  //             More Details
                  //           </CButton>
                  //           <CButton size="sm" color="warning" className="mr-1" onClick={toggle}>Process Return</CButton>
                            
                  //           <Route render={({ history}) => (
                  //           <CButton type="accept" size="sm" color="primary" className="mr-1" onClick= {() => { history.push('/views/profile/acceptance') }}>
                  //           Accept Assets
                  //           </CButton>
                  //            )}/>
                            
                  //           <CModal
                  //             show={modal}
                  //             onClose={toggle}
                  //           >
                  //             <CModalHeader closeButton>Delete User</CModalHeader>
                  //             <CModalBody>
                  //               Are you sure you want to delete User?
                  //             </CModalBody>
                  //             <CModalFooter>
                  //               <CButton color="primary">Yes</CButton>{' '}
                  //               <CButton
                  //                 color="secondary"
                  //                 onClick={toggle}
                  //               >Cancel</CButton>
                  //             </CModalFooter>
                  //           </CModal>
                  //         </CCardBody>
                  //       </CCollapse>
                  //     )
                  //   }
                }}
                addTableClasses="table-class" />

            </CCardFooter>

          </CCol>
        </CRow>

        <CRow className='mt-4'>
          <CCol>
            <CCardFooter>
              <CCardTitle>
                Completed Requests (Returned)
              </CCardTitle>
              <CDataTable
                items={completedRequests}
                fields={fields2}
                hover
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
                scopedSlots = {{
                  'user_name':
                  (item)=>(
                    <td>
                      {item.user_name.first_name} {item.user_name.last_name}
                    </td>
                  ),
                'item_name':
                  (item)=>(
                    <td>
                      {item.item_name.asset_name}
                    </td>
                  ),
                'request_status':
                  (item)=>(
                    <td>
                    <CBadge color={getBadge(item.request_status)}>
                      {item.request_status}
                    </CBadge>
                    </td>
                  ),  
                'request_date':
                  (item)=>(
                    <td>
                      {dateFormat(item.request_date, "mmmm dd, yyyy")}
                    </td>
                  ),
                }}
                addTableClasses="table-class" />

            </CCardFooter>

          </CCol>
        </CRow>


      </CContainer>
      )
}

export default Profile
