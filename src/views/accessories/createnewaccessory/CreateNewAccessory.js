import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CCardBody, CCol, CCard, CCardHeader,

} from '@coreui/react'
import BackButton from 'src/views/users/backbutton/BackButton'

const CreateNewAccessory = () => {

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
                <BackButton/>
                
          </CCardHeader>
          <CCardBody>
          
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default CreateNewAccessory