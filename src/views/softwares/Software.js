import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
//

import softwaresData from './SoftwaresData'


const Software = ({match}) => {

  const { softwares, getSoftwares } = useContext(GlobalContext)

   useEffect(() => {
    getSoftwares()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const software = softwares.find( softwares => softwares.id.toString() === match.params.id)

  // const software = softwaresData.find( software => software.id.toString() === match.params.id)

  const softwareDetails = software ? Object.entries(software) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Software License {match.params.id}
          </CCardHeader>
          <CCardBody>
          <table className="table table-striped table-hover">
                <tbody>
                  {
                    softwareDetails.map(([key, value], index) => {
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

export default Software
