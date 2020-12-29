import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";

// softwaresData.forEach(software => console.log(software))

const Request = ({match}) => {

  const { requests, updateRequest, getPendingRequests } = useContext(GlobalContext)
  useEffect(() => {
    getPendingRequests()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let history = useHistory();

  const request = requests.find( request => request._id.toString() === match.params.id)

  const handleOnClick = (data) => {
    updateRequest(match.params.id, data)
    alert(`Request Successfully ${data.request_status}`)
    console.log(data)
    setTimeout(()=>history.push('/views/requests'), 500);
    // window.location.reload()
  }

  var pretifyName = function pretifyName(name) {
    return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  const requestDetails = request ? Object.entries(request) : 
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
                          <td>{`${pretifyName(key)}:`}</td>
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
