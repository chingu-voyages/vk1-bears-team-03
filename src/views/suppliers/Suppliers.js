import React, { useState } from 'react'
import { Route } from 'react-router-dom'
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody,
  CDataTable,
  CButton, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'

import suppliersData from "./SuppliersData"
import AddButton from '../addButton/AddButton'

const Suppliers = () => {
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
  // {
  //   key: 'select',
  //   label: 'Select',
  //   _style: { width: '1%'}
  // },
  { key: 'id'},
  { key: 'name'},
   'address', 'contact_name','phone_number','email_address', 
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


const [modal, setModal] = useState(false)

const toggle = () => {
  setModal(!modal);
}

return (
  <>
  <AddButton location='/views/suppliers/addsupplier' />
  <CDataTable
    items={suppliersData}
    fields={fields}
    tableFilter={tableFilter}
    itemsPerPageSelect
    itemsPerPage={5}
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
                <Route render={({ history}) => (
                  <CButton type="reset" size="sm" color="dark" className="mr-1" onClick= {() => { history.push('/views/suppliers/viewmoresupplier') }}>
                        View More
                  </CButton>
                )}/>

               
               <Route render={({ history}) => (
                  <CButton type="reset" size="sm" color="primary" className="mr-1" onClick= {() => { history.push('/views/suppliers/updatesupplier') }}>
                        Update
                  </CButton>
                )}/>

               
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
export default Suppliers