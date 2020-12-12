import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UploadFileButton from '../uploadfilebutton/UploadFilebButton'
import BackButtonComponent from '../../components/backbuttoncomponent/BackButtonComponent';
import SinglePrintButton from '../../printbutton/singleprint/SinglePrintButton';

import { faBarcode, faHistory, faUpload, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabPane, CNavItem, CNavLink, CInputFile, CTabContent

} from '@coreui/react'

const ViewMoreComponent = () => {
    
  const [active, setActive] = useState(1)
  const lorem = ''

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
                <BackButtonComponent/>
                
          </CCardHeader>
          <CCardBody>
          <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faInfoCircle} className="fonticons"/>
                    { active === 0 && 'Details'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faBarcode} className="fonticons"/>
                    { active === 1 && 'Assets'}
                  </CNavLink>
                </CNavItem>
                
              <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faHistory} className="fonticons"/>
                  { active === 2 && 'History'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faUpload} className="fonticons"/>
                  { active === 3 && 'File Upload'}
                    
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  <SinglePrintButton/>
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  <SinglePrintButton/>
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  <SinglePrintButton/>
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  <CInputFile id="file-input" name="file-input"/>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default ViewMoreComponent