import React, {useEffect, useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel,  CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const UpdateDepartment = ({ match }) => {
  const { register, handleSubmit } = useForm()
  const { departments, updateDepartment, getDepartments } = useContext(GlobalContext)

  useEffect(() => {
    getDepartments()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [departments])

const department = departments.find( department => department._id === match.params.id)

  const clearForm = () => {
    document.getElementById("departmentForm").reset();

  }
  const onSubmit = (data) => {
        updateDepartment(department._id, data)
        alert("Successfully Updated")
        console.log(data)
        clearForm()

  }
    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/departments' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='departmentForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Department Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" name="department_name" defaultValue={department.department_name} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                
                    <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Default Location</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="department_location" id="department_location" defaultValue={department.department_location} ref={register}>
                    {/* <CSelect custom name="select" id="select"> */}
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    {/* </CSelect> */}
                    </select>
                  </CCol>
                  
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="department_notes">Notes</CLabel>
                  </CCol>
                  
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text-area" id="department_notes" name="department_notes" ref={register} />
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
                <CancelButton size='md' location='/departments' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
        
      </CCol>

      
    )
}

export default UpdateDepartment