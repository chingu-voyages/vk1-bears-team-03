import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CModal, CModalHeader, CModalBody, CModalFooter, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";
import dateFormat from 'dateformat';
import { Route } from 'react-router-dom'

// softwaresData.forEach(software => console.log(software))

const Request = ({match}) => {

  const { pendingRequests, updateRequest, getPendingRequests } = useContext(GlobalContext)
  useEffect(() => {
    getPendingRequests()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let history = useHistory();

  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }

  const request = pendingRequests.find( request => request._id.toString() === match.params.id)


//Deny Button Logic
  const handleDenyClick = () => {

    let data = {}
    let message = ""

    if (request.request_type === 'Borrow') {
      data = {"request_status": "Denied"}
      message = "Borrow Request has been Denied." 
    } else {
      data = {"request_status": "Approved"}
      message = "Return Request Denied. This request will now go back to the User's profile page. To retry returning the asset, the User must submit a new Return request."
    }
    
    updateRequest(match.params.id, data)
    toggle()
    setTimeout(()=>alert(`${message}`), 200);
    // alert(`${message}`)
    console.log(data)
    setTimeout(()=>history.push('/views/requests'), 500);
  }



  //Approve Button Logic
  const handleApproveClick = () => {

    let data = {}
    let message = ""

    if (request.request_type === 'Borrow') {
      data = {"request_status": "Approved"}
      message = "Request successfully Approved" 
    } else {
      data = {"request_status": "Returned"}
      message = "Request accepted. Asset Successfully Returned"
    }
    
    updateRequest(match.params.id, data)
    toggle()
    setTimeout(()=>alert(`${message}`), 200);
    console.log(data)
    setTimeout(()=>history.push('/views/requests'), 500);
  }

  // var pretifyName = function pretifyName(name) {
  //   return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
  //     return word.charAt(0).toUpperCase() + word.slice(1);
  //   }).join(' ');
  // };

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
                  <tr>
                    <td> Request ID </td>
                    <td><b> {request._id} </b></td>
                  </tr>
                  <tr>
                    <td> Requested By </td>
                    <td><b> {request.user_name.first_name} {request.user_name.last_name} {`(${request.user_name.username})`} </b></td>
                  </tr>

                  <tr>
                    <td> Item ID </td>
                    <td><b> {request.item_name._id} </b></td>
                  </tr>

                  <tr>
                    <td> Item Borrowed </td>
                    <td><b> {request.item_name.asset_name} </b></td>
                  </tr>

                  <tr>
                    <td> Request Type </td>
                    <td><b> {request.request_type} </b></td>
                  </tr>

                  <tr>
                    <td> Request Date </td>
                    <td><b> {dateFormat(request.request_date, "mmmm dd, yyyy")} </b></td>
                  </tr>

                  <tr>
                    <td> Updated At </td>
                    <td><b> {dateFormat(request.request_date, "dddd, mmmm dd, yyyy hh:hh TT")} </b></td>
                  </tr>
                </tbody>
              </table>     
          
          <CButton size="md" color="danger" className="mr-1 mt-2 float-right" onClick={()=> toggle()}>
                    Deny
          </CButton>
          <CModal
              show={modal}
              onClose={toggle}
            >
            <CModalHeader closeButton>Deny This Request?</CModalHeader>
              <CModalBody>
                Are you sure you want to deny this request?
              </CModalBody>
            <CModalFooter>
              <CButton color="primary"  onClick={() => handleDenyClick()}>Yes</CButton>
              <CButton
                color="secondary"
                onClick={toggle}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>

          <CButton size="md" color="primary" className="mr-1 mt-2 float-right" onClick={()=> toggle()}>Approve</CButton>
          <CModal
              show={modal}
              onClose={toggle}
            >
            <CModalHeader closeButton>Approve This Request?</CModalHeader>
              <CModalBody>
                Are you sure you want to approve this request?
              </CModalBody>
            <CModalFooter>
              <CButton color="primary"  onClick={() => handleApproveClick()}>Yes</CButton>
              <CButton
                color="secondary"
                onClick={toggle}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>

          <Route render={({ history}) => (
              <CButton
                className="mr-1 mt-2 float-left"
                color="info"
                size="md"
                onClick={() => { history.push('/views/requests') }}>
                Back
              </CButton>
              )}/>
        </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Request