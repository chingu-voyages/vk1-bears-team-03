import React, { useState, useContext, useEffect } from 'react'

import {
  CCardBody,
  CDataTable,
  CButton, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'
import { Route, useHistory } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../../context/LoadingIndicator'
import AddButton from '../addButton/AddButton'

const Users = () => {

  const { users, getUsers, deleteUser } = useContext(GlobalContext)
  useEffect(() => {
    trackPromise(getUsers())
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

const loading = LoadingIndicator()

const handleDelete = (data) => {
  deleteUser(data)
  toggle()
  alert(`User Successfully Deleted`)
  window.location.reload()
}

const fields = [
  {
    key: 'id',
    label: 'User ID',
    _style: { width: '20%' },
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'username',
    label: 'Username'
  },
  {
    key: 'email_address',
    label: 'Email Address'
  },
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
    items={users}
    tableFilter={tableFilter}
    itemsPerPage={5}
    itemsPerPageSelect
    fields={fields}
    noItemsViewSlot={loading}
    hover
    pagination
    scopedSlots = {{
      'id':
          (item)=>(
            <td>
              {item._id}
            </td>
          ),
      'name':
          (item)=>(
            <td>
              {item.first_name} {item.last_name}
            </td>
          ),
      'username':
          (item)=>(
            <td>
              {item.username}
              </td>
          ),
      'email_address':
          (item)=>(
            <td>
              {item.email}
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
                  {item.first_name} {item.last_name}
                </h4>
                <p className="text-muted">Role: <b>{item.user_role}</b></p>
                <Route render={({ history}) => (
                  <CButton size="sm" color="primary" className="mr-1" onClick={() => { 
                    history.push(`users/profile/${item._id}`) }
                    }>
                      View Profile
                  </CButton>  
                 )}/>
                {/* <Route render={({ history}) => (
                <CButton size="sm" color="primary" className="mr-1" onClick= {() => { history.push('/views/users/profile/updateuser') }}>
                Update
              </CButton>
                )}/> */}
               
                
                <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Delete</CButton>
                <CModal
                  show={modal}
                  onClose={toggle}
                >
                  <CModalHeader closeButton>Delete User</CModalHeader>
                  <CModalBody>
                    Are you sure you want to delete User?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={()=>handleDelete(item._id)}>Yes</CButton>{' '}
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