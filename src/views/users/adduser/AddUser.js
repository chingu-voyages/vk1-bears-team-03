import React from 'react'
import {CCol, CFormGroup, CLabel, CInput, CButton, CCard, CCardHeader, CCardBody, CSwitch, CSelect, CTextarea, CCardFooter} from '@coreui/react'

import CancelButton from '../../cancelbutton/CancelButton'
import BackButton from '../../backButton/BackButton'

const AddUser = () =>{
  return(
        
    <CCol xs="12" md="6" lg="12" className="mb-4">
    <CCard>
      <CCardHeader>
      <BackButton location='/users'/>
     
      <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
      </CCardHeader>
      <CCardBody>
      <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">First Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
             
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Last Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Username</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
                <CCol tag="label" md="2" className="col-form-label d-flex justify-content-sm-end" >
                  Active User Log In
                </CCol>
                <CCol sm="9">
                  <CSwitch
                    className="mr-1"
                    color="primary"
                    defaultChecked
                    labelOn="yes"
                    labelOff="no"
                  />
                  
                </CCol>
              </CFormGroup>
            <CFormGroup row>
                <CCol tag="label" md="2" className="col-form-label d-flex justify-content-sm-end" >
                  Email Credentials
                </CCol>
                <CCol sm="9">
                  <CSwitch
                    className="mr-1"
                    color="primary"
                    defaultChecked
                    labelOn="yes"
                    labelOff="no"
                  />
                  
                </CCol>
              </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Password</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Confirm Password</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Email Address</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Employee Number</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Job Title</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Address</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                <CLabel htmlFor="text-input">Zip Code</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="text-input" name="text-input" placeholder="" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                  <CLabel htmlFor="select">Country</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CCol>
                
              </CFormGroup>
              
                  <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                  <CLabel htmlFor="textarea-input">Notes</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea 
                    name="textarea-input" 
                    id="textarea-input" 
                    rows="2"
                    placeholder="Content..." 
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
              <CCol md="2" className="d-flex justify-content-sm-end">
                  <CLabel htmlFor="select">User Role</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CCol>
                
              </CFormGroup>
            <CCardFooter row>
            <CCol md="12" className="d-flex justify-content-sm-end">
              <CButton type="save" size="md" color="primary" className="mr-1">  Save</CButton>
              <CancelButton size="md" location='/users'/>
            </CCol>
        </CCardFooter>
      </CCardBody>
    </CCard>
  </CCol>
 
  )
}

export default AddUser