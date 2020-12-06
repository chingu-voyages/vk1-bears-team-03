import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadFileButton from '../uploadfilebutton/UploadFilebButton'
import BackButton from '../users/backbutton/BackButton';
import SinglePrintButton from '../printbutton/singleprint/SinglePrintButton';

import { faBarcode, faSave, faFile, faKeyboard, faTint, faHistory, faUpload} from "@fortawesome/free-solid-svg-icons";
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabContent, CTabPane, CNavItem, CNavLink,

} from '@coreui/react'

const SeeAllAssets = () => {
    
  const [active, setActive] = useState(1)
  const lorem = ''

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
                <BackButton/>
                
          </CCardHeader>
          <CCardBody>
          <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faBarcode} className="fonticons"/>
                    { active === 0 && 'Assets'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faSave} className="fonticons"/>,
                    { active === 1 && 'Software Licenses'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    
                    <FontAwesomeIcon icon={faFile} className="fonticons"/>
                    { active === 2 && 'Government Permits'}
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faKeyboard} className="fonticons"/>
                  { active === 3 && 'Accessories'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faTint} className="fonticons"/>
                  { active === 4 && 'Consumable'}
                    
                  </CNavLink>
                </CNavItem>
              <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faHistory} className="fonticons"/>
                  { active === 5 && 'History'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faUpload} className="fonticons"/>
                  { active === 6 && 'File Upload'}
                    
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
                  <SinglePrintButton/>
                </CTabPane>
                <CTabPane>
                  <br/>
                <UploadFileButton/>
            
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>

      
    )
}

export default SeeAllAssets