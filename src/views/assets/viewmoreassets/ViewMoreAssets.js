import React from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader,

} from '@coreui/react'

import BackButtonAssets from 'src/views/assets/backbuttonassets/BackButtonAssets'


const ViewMoreAssets = () => {

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>

          <BackButtonAssets/>

          </CCardHeader>
          <CCardBody>
          
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default ViewMoreAssets