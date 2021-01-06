import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {
  CForm,CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'
import dateFormat from 'dateformat'
import { useHistory } from "react-router-dom";

const AddAsset = () => {
  const [file, setFile] = useState('')
  // const [uploadedFile, setUploadedFile] = useState({})
  const [filename, setFileName] = useState('Choose File')
<<<<<<< HEAD
  const { register, handleSubmit, errors } = useForm()
  const { assets, addAsset, getAssets } = useContext(GlobalContext)
=======
  const { register, handleSubmit } = useForm()
  const { addAsset } = useContext(GlobalContext)
>>>>>>> 80a54babe92dba28afc902dc6ce52c64092eb93c

  //SET CURRENT URL
  let history = useHistory();

  useEffect(() => {
    getAssets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  
  // CLEARING FORM FIELDS
  const clearForm = () => {
    document.getElementById("assetForm").reset();

  }

  //HANDLE ON CHANGE 
  const onChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  //HANDLE ON SUBMIT
  const onSubmit = async (data) => {
    const formData = new FormData()

    formData.append('file', file)
    const asset = assets.find(asset => asset.asset_serial === data.asset_serial)
    try {
      if(asset) {
        alert("Asset is already added! Please enter the correct data.")
      }else {
        const res = await axios.post('/upload', formData, {
          headers: {
              "Content-Type": "multipart/form-data"
          },
          // onUploadProgress: ProgressEvent =>{
          // setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)))
  
          //Clear percentage
          // setTimeout(() => setUploadPercentage(0), 10000)
          // }
          
        })
        const { fileName, filePath } = res.data
        const newAsset= {
              asset_name: data.asset_name,
              asset_category:data.asset_category,
              asset_status:data.asset_status,
              asset_serial:data.asset_serial,
              asset_purchasecost:data.asset_purchasecost,
              asset_warrantydate: dateFormat(data.asset_warrantydate, "mm/dd/yyyy"),
              asset_file: {
                file_name: fileName,
                file_path: filePath
              }
          }
          
          addAsset(newAsset)
          alert("Successfully Added!")
          clearForm()
          history.push('/assets')
      }
      
    } catch (err) {
      alert(`${err}`)
    }
    console.log(data)
  }
  
    return (
          <CCol xs="12" md="6" lg="12" className="mb-4">
             <CCard>
             <CCardHeader>
              <BackButton location='/assets' />
              <CButton type="reset" size="md" color="danger" className="mr-1" onClick={clearForm}> Reset</CButton>
             </CCardHeader>
             <CForm id='assetForm' onSubmit = {handleSubmit(onSubmit) } >
              <CCardBody>
                <CFormGroup row>
                        <CCol md="2" className="d-flex justify-content-sm-end">
                          <CLabel htmlFor="asset_name">Asset Name</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <input className = 'form-control' type="text" name="asset_name" ref={register} />
                        </CCol>
                      
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="2" className="d-flex justify-content-sm-end">
                          <CLabel htmlFor="asset_category">Asset Category</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <select className = 'form-control' custom name="asset_category" id="asset_category" ref={register}>
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
                          <input id="asset_serial" className = 'form-control' name="asset_serial" ref={register}/>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol md="2" className="d-flex justify-content-sm-end">
                          <CLabel htmlFor="asset_purchasecost">Purchase Cost</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <input id="asset_purchasecost" className = 'form-control' name="asset_purchasecost" placeholder='0.00' ref={register}/>
                        </CCol>
                      </CFormGroup>              
                      <CFormGroup row>
                        <CCol md="2" className="d-flex justify-content-sm-end">
                          <CLabel htmlFor="asset_warrantydate">Warranty</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <input type='Date' id='asset_warrantydate' className = 'form-control' name='asset_warrantydate' ref={register} />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol md="2" className="d-flex justify-content-sm-end">
                          <CLabel htmlFor="asset_file">Upload Photo</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <input type="file" class="form-control-file" id="asset_file" name="asset_file" placeholder= {filename} ref={register} onChange={onChange}/>
                        </CCol>
                      </CFormGroup>
                      <CCardFooter row>
                      <CCol md="12" className="d-flex justify-content-sm-end">
                      <CButton type="submit" size="md" color="primary" className="mr-1 px-4" >Save</CButton>
                      <CancelButton size='md' location='/assets' />              
                    </CCol>
                  </CCardFooter>
                </CCardBody>
                </CForm>
              </CCard>
            </CCol>
          
      )
          
}

export default AddAsset