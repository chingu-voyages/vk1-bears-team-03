import React from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CCardBody, CCol, CCard, CCardHeader, CTabs, CNav, CTabContent, CTabPane, CNavItem, CNavLink, CButton
// CCardHeader,
} from '@coreui/react'
import { Route } from 'react-router-dom'

const SeeAllAssets = () => {
    
    // const [active, setActive] = useState(1)
  const lorem = ''

    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <Route render={({ history}) => (
              <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/views/seeallassets') }}>
                    Print All
              </CButton>
                )}/>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>    
                    Assets
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Software Licenses
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Government Permits
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Accessories
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Consumable
                  </CNavLink>
                </CNavItem>
              <CNavItem>
                  <CNavLink>
                    History
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    File Upload
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  {` ${lorem}`}
                  
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
                <CTabPane>
                  {` ${lorem}`}
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    )
}

export default SeeAllAssets