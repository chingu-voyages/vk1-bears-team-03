
import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import  {CContainer, CRow, CCol, CCardHeader, CCardBody, CCard, CLabel, CFormGroup} from '@coreui/react'
import dateFormat from 'dateformat'
import Images from '../../../uploads/images'
import BackButton from '../../backButton/BackButton'

const ViewMoreAssets = ({ match }) => {
  const { assets, getAssets } = useContext(GlobalContext)
  const asset = assets.find( asset => asset._id === match.params.id)

  useEffect(() => {
      getAssets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <CContainer fluid>
    <CRow>
      <CCol sm = "4">
        <CCardHeader className="text-center">
          <CCol className="d-flex justify-content-center">
            <Images item={asset}/>
          </CCol>
          
          <h3 className="my-1"> {asset.asset_name} </h3>
          <p><strong>Asset ID: </strong>{asset._id}</p>
        </CCardHeader>

      </CCol>
      <CCol>
        <CCard>
        
        <CCardHeader>
          <CRow><h3 className='px-3'>Asset Details</h3></CRow>
        </CCardHeader>

        <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" defaultValue={asset.asset_name} disabled/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset ID: </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" defaultValue={asset._id} disabled/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_category">Asset Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_category" id="asset_category" defaultValue={asset.asset_category} disabled>
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
                    <input id="asset_serial" className = 'form-control' name="asset_serial" defaultValue={asset.asset_serial} disabled/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_purchasecost">Purchase Cost</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input id="asset_purchasecost" className = 'form-control' name="asset_purchasecost" defaultValue={asset.asset_purchasecost} disabled/>
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_warrantydate">Warranty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input type='Date' id='asset_warrantydate' className = 'form-control' name='asset_warrantydate' defaultValue={dateFormat(asset.asset_warrantydate, "yyyy-mm-dd")} disabled />
                  </CCol>
          </CFormGroup>

          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_status">Asset Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_status" id="asset_status" defaultValue={asset.asset_status} disabled>
                      <option >Please select</option>
                      <option value="Available">Available</option>
                      <option value="Borrowed">Borrowed</option>
                      <option value="Damaged">Damaged</option>
                    </select>
                  </CCol>
          </CFormGroup>
          <CRow className = "my-4 mx-1 d-flex justify-content-end">
            <BackButton location='/assets' />
          </CRow>
        </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
  )
}

export default ViewMoreAssets