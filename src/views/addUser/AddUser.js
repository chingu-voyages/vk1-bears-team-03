import React from 'react'
import {CContainer, CRow, CCol, CForm, CFormGroup, CLabel, CInput, CFormText, CButton} from '@coreui/react'

const AddUser = () =>{
    return (
        <CContainer fluid>
          <CRow>
            <CCol sm="12">
              <CForm action="" method="post">
              <CFormGroup>
                  <CLabel htmlFor="nf-email">Name</CLabel>
                  <CInput
                    type="text"
                    id="nf-fName"
                    name="nf-fName"
                    placeholder="Enter your first name.."
                    className='col-6 mb-2'
                  />
                  <CInput
                    type="text"
                    id="nf-lName"
                    name="nf-lName"
                    placeholder="Enter your last name.."
                    className='col-6'
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Username</CLabel>
                  <CInput
                    type="text"
                    id="nf-uName"
                    name="nf-uName"
                    placeholder="Enter your username.."
                    className='col-6 mb-2'
                  />
                  
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Email</CLabel>
                  <CInput
                    type="email"
                    id="nf-email"
                    name="nf-email"
                    placeholder="Enter Email.."
                    autoComplete="email"
                    className='col-6'
                  />
                </CFormGroup>
                {/* <CFormGroup>
                  <CLabel htmlFor="nf-password">Password</CLabel>
                  <CInput
                    type="password"
                    id="nf-password"
                    name="nf-password"
                    placeholder="Enter Password.."
                    autoComplete="current-password"
                  />
                  <CFormText className="help-block">Please enter your password</CFormText>
                </CFormGroup> */}
              </CForm>
            </CCol>
                <CButton size="lg" color="primary" className="ml-5 px-5">Register</CButton>
                <CButton size="lg" color="secondary" className="ml-3 px-5">Cancel</CButton>
            </CRow>
        </CContainer>
      )
}

export default AddUser