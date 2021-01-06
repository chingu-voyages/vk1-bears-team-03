import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
//
// import permitsData from './PermitsData'

const Permit = ({match}) => {
  
  const { permit, getPermits } = useContext(GlobalContext)

  useEffect(() => {
    getPermits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  // const permit = permitsData.find( permit => permit.id.toString() === match.params.id)
  const permit = permits.find( permits => permits.id.toString() === match.params.id)

  const permitDetails = permit ? Object.entries(permit) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Permit id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    permitDetails.map(([key, value], index) => {
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

export default Permit
