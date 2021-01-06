import React, {useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CSelect, CTextarea, CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'


const AddComponent = () => {
  const { register, handleSubmit } = useForm()   
  const { addComponent } = useContext(GlobalContext)

  // const onSubmit = data => console.log("This is from onSubmit", data);
  const clearForm = () => {
    document.getElementById("componentForm").reset();
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
      const newComponent= {
            component_name: data.component_name,
            component_category:data.component_category,
            component_description:data.component_description,
            component_serial:data.component_serial,
            component_qty:data.component_qty,
            component_location:data.component_location,
            component_purchasedate:data.component_purchasedate,
            component_supplier:data.component_supplier,
        }
        
        addComponent(newComponent)//
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
          <BackButton location='/components' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='locationForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Component Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="component_name" name="component_name" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="component_category" id="component_category" ref={register}>
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
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      custom name="component_description" 
                      id="component_description" 
                      rows="2"
                      placeholder="Content..." 
                      ref={register}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Serial Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="component_serial" name="component_serial" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="component_qty" name="component_qty" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Location</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="component_location" id="component_location" ref={register}>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      
                    </CSelect>
                    </select>
                  </CCol>
                  
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Purchase Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="component_purchasedate" name="component_purchasedate" ref={register} />
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Supplier</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="component_supplier" id="component_supplier" ref={register}>
                    {/* <CSelect custom name="select" id="select"> */}
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    {/* </CSelect> */}
                    </select>
                  </CCol>
                  
                </CFormGroup>

                

                              <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="submit" size="md" color="primary" className="mr-1 px-4">  Save</CButton>
                <CancelButton size='md' location='/components' />
               
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>

      
    )
}

export default AddComponent