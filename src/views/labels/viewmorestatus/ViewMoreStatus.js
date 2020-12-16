
import React, { useState }from 'react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabPane, CNavItem, CNavLink, CInputFile, CTabContent, CButton

} from '@coreui/react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHistory, faUpload, faBarcode, faHdd, faSave, faFile, faKeyboard, faTint} from "@fortawesome/free-solid-svg-icons";


import BackButton from '../../backButton/BackButton'

const ViewMoreStatus = () => {
  const [active, setActive] = useState(1)
  const lorem = ''
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/views/status' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
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
                    <FontAwesomeIcon icon={faHdd} className="fonticons"/>
                    { active === 1 && 'Components'}
                  </CNavLink>
                </CNavItem>


                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faSave} className="fonticons"/>
                    { active === 2 && 'Software Licenses'}
                  </CNavLink>
                </CNavItem>
               
                <CNavItem>
                  <CNavLink>    
                    <FontAwesomeIcon icon={faFile} className="fonticons"/>
                    { active === 3 && 'Government Permits'}
                  </CNavLink>
                </CNavItem>

                 <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faKeyboard} className="fonticons"/>
                  { active === 4 && 'Accessories'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faTint} className="fonticons"/>
                  { active === 5 && 'Consumables'}
                    
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
                   {/* <CInputFile id="file-input" name="file-input"/> */}
  
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>

        </CCard>
      </CCol>

      
    )
}

export default ViewMoreStatus