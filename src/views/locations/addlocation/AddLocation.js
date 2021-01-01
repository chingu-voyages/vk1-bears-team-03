
import React, {useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter, CForm, Cselect

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const AddLocation = () => {
  const { register, handleSubmit, errors } = useForm()   
  const { locations, addLocation } = useContext(GlobalContext)

  // const onSubmit = data => console.log("This is from onSubmit", data);
  const clearForm = () => {
    document.getElementById("locationForm").reset();
    // this.refs.fieldorg.value="";
    // this.refs.fieldNum.value="";
  }
  const onSubmit = (data) => {
    // const assetID = await assets.findById(data._id)
    
    // if(assetID){
    //   alert("Asset is already registered! Check Serial number")
    // }
    console.log(data)
    try {
      const newLocation= {
            location_name: data.location_name,
            location_address:data.location_address,
            location_phonenumber:data.location_phonenumber,
            location_country:data.location_country,
            location_zipcode:data.location_zipcode,
        }
        
        addLocation(newLocation)
        alert("Successfully Added!")
        clearForm()
    } catch (err) {
      alert(`$err`)
    }
    console.log(data)
  }
    
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/locations' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='locationForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Location Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_name" name="location_name" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_address" name="location_address" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Phone number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_phonenumber" name="location_phonenumber" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Country</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="location_country" id="location_country" ref={register}>
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </select>
                  </CCol>
                  
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Zip Code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_zipcode" name="location_zipcode" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Upload Image</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="submit" size="md" color="primary" className="mr-1 px-4">  Save</CButton>
                <CancelButton size='md' location='/locations' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>

      
    )
}

export default AddLocation