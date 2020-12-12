import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UploadFileButton from '../uploadfilebutton/UploadFilebButton'
// import BackButtonComponent from '../backbuttoncomponent/BackButtonComponent';
import SinglePrintButton from '../../printbutton/singleprint/SinglePrintButton';

import { faUsers, faHistory, faUpload, faInfoCircle, faBarcode, faHdd} from "@fortawesome/free-solid-svg-icons";
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabPane, CNavItem, CNavLink, CInputFile, CTabContent

} from '@coreui/react'


import BackButton from '../../backButton/BackButton'

const ViewMoreLocation = () => {
    
  const [active, setActive] = useState(1)
  const lorem = ''

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/views/locations' />
                
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
                    <FontAwesomeIcon icon={faUsers} className="fonticons"/>
                    { active === 1 && 'Users'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faBarcode} className="fonticons"/>
                    { active === 2 && 'Assets'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faHdd} className="fonticons"/>
                    { active === 3 && 'Components'}
                  </CNavLink>
                </CNavItem>
              <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faHistory} className="fonticons"/>
                  { active === 4 && 'History'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faUpload} className="fonticons"/>
                  { active === 5 && 'File Upload'}
                    
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

export default ViewMoreLocation