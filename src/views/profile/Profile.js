import React, {useState} from 'react'
import {CContainer, CRow, CCol, CCardHeader, CCardBody, CCardFooter, CInput, CSelect, CCard, CButton, CModal, CModalHeader, CModalBody, CModalFooter, CDataTable, CCollapse, CCardTitle} from '@coreui/react'

import profile from './profile.png'
// import Button from '../addButton/AddButton'
import assetsData from '../assets/AssetsData'

const Profile = () => {
  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)
  
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
     'serial_number', 'asset_tag', 'status',
    {
      key: 'show_details',
      label: '',
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
        <CContainer fluid>
        <CRow>
          <CCol sm = "4">
            <CCardHeader className="text-center">
              <img src={profile} className="rounded mx-auto d-block" alt="Profile"></img>
              <h3 className="my-1"> This is my name </h3>
              <p>email@email.com</p>
            </CCardHeader>

          </CCol>
          <CCol>
            <CCard>
            <CCardHeader>
                Profile
            </CCardHeader>
            <CCardBody>
              <CRow className = "my-2">
                <CCol>
                  <CInput label="fName" placeholder="First Name"/>
                </CCol>
                <CCol>
                  <CInput label="lName" placeholder="Last Name"/>
                </CCol>
              </CRow>
              <CRow className = "my-2">
                <CCol>
                  <CInput label="email" placeholder="Enter your email address"/>
                </CCol>
                <CCol>
                  <CInput label="phone" placeholder="Enter your phone number"/>
                </CCol>
              </CRow>
              <CRow className = "my-2">
                <CCol>
                  <CInput label="address" placeholder="Enter your recent address"/>
                </CCol>
              </CRow>
              <CRow className = "my-4 mx-1 d-flex justify-content-end">
                <CButton size="md" color="primary" className="mr-1">
                  Save Changes
                </CButton>
              </CRow>
            </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CCardFooter>
              <CCardTitle>
                Borrowed Assets
              </CCardTitle>
              <CDataTable
                items={assetsData}
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
                            <CButton size="sm" color="info" className="mr-1">
                              More Details
                            </CButton>
                            <CButton size="sm" color="warning" className="mr-1" onClick={toggle}>Process Return</CButton>
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

            </CCardFooter>

          </CCol>
        </CRow>
      </CContainer>
      )
}

export default Profile
