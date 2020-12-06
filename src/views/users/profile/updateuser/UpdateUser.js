import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faBarcode, faSave, faFile, faKeyboard, faTint, faHistory, faUpload} from "@fortawesome/free-solid-svg-icons";
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody, CCol, CCard, CCardHeader,

} from '@coreui/react'
import BackButton from 'src/views/backbutton/BackButton'

const UpdateUser = () => {
    
//   const [active, setActive] = useState(1)
//   const lorem = ''

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

export default UpdateUser