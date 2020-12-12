import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'


import locationsData from './LocationsData'

// softwaresData.forEach(software => console.log(software))

const Location = ({match}) => {

  const location = locationsData.find( locations => locations.id.toString() === match.params.id)

  const locationsDetails = location ? Object.entries(location) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Locations Page {match.params.id}
          </CCardHeader>
          <CCardBody>
          <table className="table table-striped table-hover">
                <tbody>
                  {
                    locationsDetails.map(([key, value], index) => {
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

export default Location
