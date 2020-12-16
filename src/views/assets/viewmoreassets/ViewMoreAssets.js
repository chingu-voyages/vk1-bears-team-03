
import React, { useState }from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabPane, CNavItem, CNavLink, CInputFile, CTabContent, CButton

} from '@coreui/react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSave, faFile, faHistory, faUpload, faHdd, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


import BackButton from '../../backButton/BackButton'

const ViewMoreAssets = () => {
  const [active, setActive] = useState(1)
  const lorem = ''
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/views/assets' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
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
                    <FontAwesomeIcon icon={faHdd} className="fonticons"/>
                    { active === 1 && 'Components'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faSave} className="fonticons"/>,
                    { active === 2 && 'Software Licenses'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    
                    <FontAwesomeIcon icon={faFile} className="fonticons"/>
                    { active === 3 && 'Maintenance'}
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
                  {/* <SinglePrintButton/> */}
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  {/* <SinglePrintButton/> */}
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  {/* <SinglePrintButton/> */}
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  <CInputFile id="file-input" name="file-input"/>
                </CTabPane>
                <CTabPane>
                  <br/>
                  {` ${lorem}`}
                  {/* <SinglePrintButton/> */}
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

export default ViewMoreAssets