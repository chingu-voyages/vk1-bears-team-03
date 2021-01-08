import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CForm, CButton, CCardFooter

} from '@coreui/react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import dateFormat from 'dateformat'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const BorrowAsset = ( { match }) => {
  const { register, handleSubmit } = useForm()
  const { assets, getAssets, users, getUsers, addRequest} = useContext(GlobalContext)
  useEffect(() => {
    getUsers()
    getAssets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  
  const history = useHistory();
  const asset = assets.find( asset => asset._id === match.params.id)

  const clearForm = () => {
    document.getElementById("assetForm").reset();

  }
  const onSubmit = (data) => {
        console.log("This is from Submitted data", data.user_name)
        const assetAvailability =  assets.find(asset => asset.asset_status === "Available")
        
        const user = users.find(user => user._id === data.user_name)
        console.log("This is from user data", user)
        let borrowedAsset = {}

        if(!assetAvailability) {
            alert(`Something went wrong. ${assetAvailability.asset_name} might be borrowed already`)
          }else if(!user){
            alert(`Something went wrong. User cannot be found. Please check again.`)

          }else{
              borrowedAsset= {
              user_name: user._id,
              item_name: asset._id,
              request_type: "Borrow",
              request_status: "Pending"
              }
              addRequest(borrowedAsset)
              console.log(borrowedAsset)
              alert("Successfully Added!")
              clearForm()
              history.push('/assets')
          }
}    

  

    return(
      <>
      <CCol xs="12" md="6" lg="12" className="mb-4">
       <CCard>
       <CCardHeader>
        <BackButton location='/assets' />
       </CCardHeader>
       <CForm id='assetForm' onSubmit = {handleSubmit(onSubmit) } >
        <CCardBody>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="user_name">Enter your User Name: </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="user_name" ref={register} />
                  </CCol>
                
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" defaultValue={asset.asset_name} ref={register} disabled/>
                  </CCol>
                
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_category">Asset Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_category" id="asset_category" defaultValue={asset.asset_category} ref={register} disabled>
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
                    <input id="asset_serial" className = 'form-control' name="asset_serial" defaultValue={asset.asset_serial} ref={register} disabled/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_purchasecost">Purchase Cost</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input id="asset_purchasecost" className = 'form-control' name="asset_purchasecost" defaultValue={asset.asset_purchasecost} ref={register} disabled/>
                  </CCol>
                </CFormGroup>              
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_warrantydate">Warranty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input type='Date' id='asset_warrantydate' className = 'form-control' name='asset_warrantydate' defaultValue={dateFormat(asset.asset_warrantydate, "yyyy-mm-dd")} ref={register} disabled/>
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_status">Asset Status</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_status" id="asset_status" defaultValue={asset.asset_status} ref={register}>
                      <option >Please select</option>
                      <option value="Available">Available</option>
                      <option value="Borrowed">Borrowed</option>
                      <option value="Damaged">Damaged</option>
                    </select>
                  </CCol>
                </CFormGroup> */}
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="submit" size="md" color="primary" className="mr-1 px-4" >Submit Request</CButton>
                <CancelButton size='md' location='/assets' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>
    </>
    )
}

export default BorrowAsset