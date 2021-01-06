import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow, CModal, CModalHeader, CModalBody, CModalFooter, } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat"
import { Route } from 'react-router-dom'

// softwaresData.forEach(software => console.log(software))

const Request = ({match}) => {

  const { requests, updateRequest, getDeniedRequests, deleteRequest } = useContext(GlobalContext)
  useEffect(() => {
    getDeniedRequests()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  let history = useHistory();

  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }

  const request = requests.find( request => request._id.toString() === match.params.id)

  const handleOnClick = (data) => {
    updateRequest(match.params.id, data)
    toggle()
    setTimeout(()=>alert('Request Successfully Unarchived'), 200);
    console.log(data)
    setTimeout(()=>history.push('/views/archived-requests'), 500);
    // window.location.reload()
  }

  const handleDelete = () => {
    deleteRequest(match.params.id)
    toggle()
    setTimeout(()=>alert('Request Successfully Deleted'), 200);
    setTimeout(()=>history.push('/views/archived-requests'), 500);
    // window.location.reload()
  }

  // var pretifyName = function pretifyName(name) {
  //   return name.replace(/[-_.]/g, ' ').replace(/ +/g, ' ').replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ').map(function (word) {
  //     return word.charAt(0).toUpperCase() + word.slice(1);
  //   }).join(' ');
  // };

  // const requestDetails = request ? Object.entries(request) : 
  //   [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

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
          <CButton size="md" color="danger" className="mr-1 mt-2 float-right" onClick={()=> toggle()}>Delete</CButton>
          <CModal
              show={modal}
              onClose={toggle}
            >
            <CModalHeader closeButton>Delete This Request?</CModalHeader>
              <CModalBody>
                Are you sure you want to delete this request? This action cannot be reversed.
              </CModalBody>
            <CModalFooter>
              <CButton color="primary"  onClick={() => handleDelete()}>Yes</CButton>
              <CButton
                color="secondary"
                onClick={toggle}
              >Cancel</CButton>
            </CModalFooter>
          </CModal>

          <CButton size="md" color="primary" className="mr-1 mt-2 float-right" onClick={()=> toggle()}>Unarchive</CButton>
          <CModal
              show={modal}
              onClose={toggle}
            >
            <CModalHeader closeButton>Unarchive This Request?</CModalHeader>
              <CModalBody>
                Are you sure you want to unarchive this request? This will set the Request's status to Pending, and will move it back to the Pending Requests page.
              </CModalBody>
            <CModalFooter>
              <CButton color="primary"  onClick={() => handleOnClick()}>Yes</CButton>
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
                onClick={() => { history.push('/views/archived-requests') }}>
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
