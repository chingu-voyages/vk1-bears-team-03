import React from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CInput, CSelect, CTextarea, CInputGroupText, CInputGroupAppend, CInputGroupPrepend, CInputGroup, CButton, CCardFooter

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const UpdatePermit = () => {
    
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/views/permits' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Permit Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                 
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">License Key</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Status</CLabel>
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
                    <CLabel htmlFor="textarea-input">Description</CLabel>
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
                    <CLabel htmlFor="text-input">Registration Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Supplier</CLabel>
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
                    <CLabel htmlFor="text-input">Invoice Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Purchase Cost</CLabel>
                  </CCol>
                <CCol xs="12" md="9">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          {/* <CIcon name="cil-euro" /> */} PHP
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput id="input3-group1" name="input3-group1" placeholder=".." />
                      <CInputGroupAppend>
                        <CInputGroupText>.00</CInputGroupText>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup >
                
                    
                
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
                
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="reset" size="md" color="primary" className="mr-1 px-4">  Save</CButton>
                <CancelButton size='md' location='/views/permits' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default UpdatePermit