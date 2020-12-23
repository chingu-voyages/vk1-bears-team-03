import React, { useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from '../backButton/BackButton';
import SinglePrintButton from '../printbutton/singleprint/SinglePrintButton';
import { faBarcode, faSave, faFile, faKeyboard, faTint, faHistory, faUpload, faHdd} from "@fortawesome/free-solid-svg-icons";
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabContent, CTabPane, CNavItem, CNavLink, CInputFile

} from '@coreui/react'


const SeeAllAssets = () => {
    
  const [active, setActive] = useState(1)
  const lorem = ''
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-6">
        <CCard>
          <CCardHeader>
                <BackButton location  = '/users'/>
                
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
                  <FontAwesomeIcon icon={faSave} className="fonticons"/>,
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
                  { active === 5 && 'Consumable'}
                    
                  </CNavLink>
                </CNavItem>
              <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faHistory} className="fonticons"/>
                  { active === 6 && 'History'}
                    
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                  <FontAwesomeIcon icon={faUpload} className="fonticons"/>
                  { active === 7 && 'File Upload'}
                    
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
                <CTabPane className ='mb-3'>
                  <br/>
                  {` ${lorem}`}
                {/* <SinglePrintButton/> */}
                </CTabPane>
                <CTabPane>
                  <br/>
                  <CInputFile id="file-input" name="file-input"/>

                </CTabPane>
              </CTabContent>
            </CTabs>
            <SinglePrintButton/>
          </CCardBody>
          
        </CCard>
        
      </CCol>

      
    )
}

export default SeeAllAssets