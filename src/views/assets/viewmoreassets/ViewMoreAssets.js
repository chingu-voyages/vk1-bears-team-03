
import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import  {CContainer, CRow, CCol, CCardHeader, CCardBody, CCardFooter, CInput, CCard, CButton, CLabel, CFormGroup} from '@coreui/react'
import dateFormat from 'dateformat'
import Images from '../../../uploads/images'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  faSave, faFile, faHistory, faUpload, faHdd, faInfoCircle} from "@fortawesome/free-solid-svg-icons";


import BackButton from '../../backButton/BackButton'

const ViewMoreAssets = ({ match }) => {
  const { assets, getAssets } = useContext(GlobalContext)
  const asset = assets.find( asset => asset._id === match.params.id)

  useEffect(() => {
      getAssets()
      console.log("This is Asset", asset)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [details, setDetails] = useState([])
 
  
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const fields = [
    { key: '_id'},
    { key: 'asset_name'},
     'asset_serial', 'asset_category','asset_warrantydate', 'asset_status',
    {
      key: 'show_details',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  // {asset_status: "Available", _id: "5fead0839464514ecc216b72", asset_name: "Computer", asset_category: "License", asset_serial: "1234567812", …}
  // asset_category: "License"
  // asset_file: {file_name: "dp-logo-outine.png", file_path: "/uploads/dp-logo-outine.png"}
  // asset_name: "Computer"
  // asset_purchasecost: "35000"
  // asset_serial: "1234567812"
  // asset_status: "Available"
  // asset_warrantydate: "12/04/2020"
  // createdAt: "2020-12-29T06:45:23.391Z"
  // __v: 0
  // _id: "5fead0839464514ecc216b72"
  // __proto__: Object
  
  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }
//  console.log("This is asset id", match.asset_id)
  return (

    <CContainer fluid>
    <CRow>
      <CCol sm = "4">
        <CCardHeader className="text-center">
          <CCol className="d-flex justify-content-center">
            <Images item={asset}/>
          </CCol>
          
          <h3 className="my-1"> {asset.asset_name} </h3>
          <p><strong>Serial Number: </strong>{asset.asset_serial}</p>
        </CCardHeader>

      </CCol>
      <CCol>
        <CCard>
        <CCardHeader>
          <BackButton location='/assets' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
        </CCardHeader>
        <CCardBody>
          <CRow><h3 className='px-3'>Asset Details</h3></CRow>
          <CFormGroup row className='mt-3'>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" defaultValue={asset.asset_name} />
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset ID: </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" defaultValue={asset._id}/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_category">Asset Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_category" id="asset_category" defaultValue={asset.asset_category}>
                      <option >Please select</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Software">Software</option>
                      <option value="License">License</option>
                    </select>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_serial">Serial Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input id="asset_serial" className = 'form-control' name="asset_serial" defaultValue={asset.asset_serial}/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_purchasecost">Purchase Cost</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input id="asset_purchasecost" className = 'form-control' name="asset_purchasecost" defaultValue={asset.asset_purchasecost}/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_warrantydate">Warranty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input type='Date' id='asset_warrantydate' className = 'form-control' name='asset_warrantydate' defaultValue={dateFormat(asset.asset_warrantydate, "yyyy-mm-dd")} />
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_status">Asset Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_status" id="asset_status" defaultValue={asset.asset_status}>
                      <option >Please select</option>
                      <option value="Available">Available</option>
                      <option value="Borrowed">Borrowed</option>
                      <option value="Damaged">Damaged</option>
                    </select>
                  </CCol>
          </CFormGroup>
          <CRow className = "my-4 mx-1 d-flex justify-content-end">
            <CButton size="md" color="primary" className="mr-1">
              Save Changes
            </CButton>
          </CRow>
        </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
  )
}

export default ViewMoreAssets