import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import componentsData from './ComponentsData'
//
const ComponentAsset = ({match}) => {
  // const component = componentsData.find( component => component.id.toString() === match.params.id)
 
  const { components, getComponents } = useContext(GlobalContext)

   useEffect(() => {
    getComponents()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 
  const component = components.find( components => components.id.toString() === match.params.id)

  
  
  const componentsDetails = component ? Object.entries(component) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            User id: {match.params.id}
          </CCardHeader>
         
          <CCardBody>
          
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    componentsDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
        
      </CCol>
    </CRow>
  )
}

export default ComponentAsset
