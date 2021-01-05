import React, {useEffect, useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'


const UpdateLocation = ({ match }) => {
  const { register, handleSubmit } = useForm()   
  const { locations, updateLocation, getLocations } = useContext(GlobalContext)

  useEffect(() => {
    getLocations()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [locations])

const location = locations.find( location => location._id === match.params.id)

  const clearForm = () => {
    document.getElementById("locationForm").reset();

  }
  const onSubmit = (data) => {
    updateLocation(location._id, data)
        alert("Successfully Updated")
        console.log(data)
        clearForm()

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
                  <input className = 'form-control' type="text" id="location_name" name="location_name" defaultValue={location.location_name} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_address" name="location_address" defaultValue={location.location_address} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Phone number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="location_phonenumber" name="location_phonenumber" defaultValue={location.location_phonenumber} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Country</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CSelect custom name="select" id="select"> */}
                    
                    <select className = 'form-control' custom name="location_country" id="location_country" defaultValue={location.location_country} ref={register}>
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      </select>
                    {/* </CSelect> */}
                  </CCol>
                  
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Zip Code</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                    <input className = 'form-control' type="text" id="location_zipcode" name="location_zipcode" defaultValue={location.location_zipcode} ref={register} />
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

export default UpdateLocation