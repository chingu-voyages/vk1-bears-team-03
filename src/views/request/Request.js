import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'


import requestsData from './RequestsData'

// softwaresData.forEach(software => console.log(software))

const Request = ({match}) => {

  const { assets, updateRequest, getRequests } = useContext(GlobalContext)
  useEffect(() => {
    getRequests()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const asset = assets.find( asset => asset._id.toString() === match.params.id)

  const handleOnClick = (data) => {
    updateRequest(match.params.id, data)
    alert("Successfully Updated")
    console.log(data)
    window.location.reload()
  }

  const requestDetails = asset ? Object.entries(asset) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Manage Request <b>{match.params.id}</b>
          </CCardHeader>
          <CCardBody>
          <table className="table table-striped table-hover">
                <tbody>
                  {
                    requestDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{`${value}`}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>     
          <CButton size="md" color="primary" className="mr-1 mt-2" onClick={()=> handleOnClick({"request_status": "Approved"})}>
                    Approve
          </CButton>
          <CButton size="md" color="danger" className="mr-1 mt-2" onClick={()=> handleOnClick({"request_status": "Denied"})}>Deny</CButton>
        </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Request
