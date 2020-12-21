import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CForm,CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CInput, CSelect, CTextarea, CInputGroupText, CInputGroupAppend, CInputGroupPrepend, CInputGroup, CButton, CCardFooter

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const UpdateAsset = (item) => {
  const { register, handleSubmit, errors } = useForm()
  const { assets, updateAsset } = useContext(GlobalContext)

  const asset = assets.find( asset => asset._id === item.params.id)

  const clearForm = () => {
    document.getElementById("assetForm").reset();

  }
  const onSubmit = (data) => {
    // const assetID = await assets.findById(data._id)
    
    // if(assetID){
    //   alert("Asset is already registered! Check Serial number")
    // }

    try {
      const newAsset= {
            asset_name: data.asset_name,
            asset_category:data.asset_category,
            asset_status:data.asset_status,
            asset_serial:data.asset_serial,
            asset_purchasecost:data.asset_purchasecost,
            asset_warrantydate:(data.asset_warrantydate).split('T')[0],
        }

        updateAsset(asset._id, newAsset)
        alert("Successfully Added!")
        console.log(newAsset)
        clearForm()
    } catch (err) {
      alert(`$err`)
    }
    console.log(data)
  }


  return (
    <CCol xs="12" md="6" lg="12" className="mb-4">
       <CCard>
       <CCardHeader>
        <BackButton location='/views/assets' />
        <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
       </CCardHeader>
       <CForm id='assetForm' onSubmit = {handleSubmit(onSubmit) } >
        <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_name">Asset Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input className = 'form-control' type="text" name="asset_name" value={asset.asset_name} ref={register} />
                  </CCol>
                
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_category">Asset Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <select className = 'form-control' custom name="asset_category" id="asset_category" value={asset.asset_category} ref={register}>
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
                    <input id="asset_serial" className = 'form-control' name="asset_serial" value={asset.asset_serial} ref={register}/>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_purchasecost">Purchase Cost</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input id="asset_purchasecost" className = 'form-control' name="asset_purchasecost" value={asset.asset_purchasecost} ref={register}/>
                  </CCol>
                </CFormGroup>              
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="asset_warrantydate">Warranty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <input type='Date' id='asset_warrantydate' className = 'form-control' name='asset_warrantydate' value={asset.asset_warrantydate} ref={register} />
                  </CCol>
                </CFormGroup>
              
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="submit" size="md" color="primary" className="mr-1 px-4" >Save</CButton>
                <CancelButton size='md' location='/views/assets' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>
    
  )
}

export default UpdateAsset