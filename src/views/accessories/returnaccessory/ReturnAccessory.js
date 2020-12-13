import React from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CInput,  CTextarea, CButton, CCardFooter

} from '@coreui/react'

import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

// import CIcon from '@coreui/icons-react'


const ReturnAccessory = () => {
    
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>

          <BackButton location='/views/accessories' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Accessory Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                 
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Accessory Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                 
                </CFormGroup>
               
                
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="" />
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
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="return" size="md" color="primary" className="mr-1"> Return</CButton>
              
                <CancelButton size='md' location='/views/accessories' />  
              </CCol>
            </CCardFooter>
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default ReturnAccessory