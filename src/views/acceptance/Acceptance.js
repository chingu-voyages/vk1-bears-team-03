import React from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter, CInputRadio, CTextarea

} from '@coreui/react'
// import BackButton from '../../backButton/BackButton'
// import CancelButton from '../../cancelbutton/CancelButton'

const Acceptance = () => {
    
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          {/* <BackButton location='/views/profile' /> */}
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CCardBody>
          <CFormGroup row>
              
              <CCol md="2" className="d-flex justify-content-sm-end">
                 
                 <CLabel>End User License Agreement</CLabel>
               </CCol>
               <CCol xs="12" md="9">
                 
               </CCol>
             </CFormGroup>
        
          <CFormGroup row>
              
                 <CCol md="2" className="d-flex justify-content-sm-end">
                    
                    <CLabel>User Acceptance</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CFormGroup variant="checkbox">
                        
                      <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Accept</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Decline</CLabel>
                    </CFormGroup>
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
                    <CLabel htmlFor="textarea-input">Signature Pad</CLabel>
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
                    <CLabel htmlFor="textarea-input">Upload E Signature</CLabel>
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
                {/* <CancelButton size='md' location='/views/status' />               */}
              </CCol>
            </CCardFooter>
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default Acceptance