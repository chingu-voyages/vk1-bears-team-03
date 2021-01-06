import React, {useEffect, useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CInput, CForm, CTextarea, CInputGroupText, CInputGroupAppend, CInputGroupPrepend, CInputGroup, CButton, CCardFooter

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'


const UpdateAccessory = ({ match }) => {

  const { register, handleSubmit } = useForm()   
  const { accessories, updateAccessory, getAccessories } = useContext(GlobalContext)
   
  useEffect(() => {
    getAccessories()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [accessories])

const accessory = accessories.find( accessory => accessory._id === match.params.id)

  const clearForm = () => {
    document.getElementById("accessoryForm").reset();

  }
  const onSubmit = (data) => {
    updateAccessory(accessory._id, data)
        alert("Successfully Updated")
        console.log(data)
        clearForm()

  }


    return(
        
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/accessories' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='accessoryForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Accessory Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="accessory_name" name="accessory_name" defaultValue={accessory.accessory_name} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_category" id="accessory_category" defaultValue={accessory.accessory_category} ref={register}>
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
                      custom name="accessory_description" 
                      id="accessory_description" 
                      rows="2"
                      placeholder="Content..." 
                      defaultValue={accessory.accessory_description}
                    />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_manufacturer" id="accessory_manufacturer" defaultValue={accessory.accessory_manufacturer} ref={register}>
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
                    <CLabel htmlFor="select">Default Location</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_defaultlocation" id="accessory_defaultlocation" defaultValue={accessory.accessory_defaultlocation} ref={register}>
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
                    <CLabel htmlFor="text-input">Purchase Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="accessory_purchasedate" name="accessory_purchasedate" defaultValue={accessory.accessory_purchasedate} ref={register} />
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Supplier</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_supplier" id="accessory_supplier" defaultValue={accessory.accessory_supplier} ref={register}>
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
                    <CLabel htmlFor="text-input">Invoice Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="accessory_invoicenum" name="accessory_invoicenum" defaultValue={accessory.accessory_invoicenum} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Purchase Cost</CLabel>
                  </CCol>
                <CCol xs="12" md="9">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                        <input className = 'form-control' type="text" id="accessory_purchasecost" name="accessory_purchasecost" defaultValue={accessory.accessory_purchasecost} ref={register} />
                          {/* <CIcon name="cil-euro" /> */} PHP
                        </CInputGroupText>
                      </CInputGroupPrepend>

                      {/* <CInput id="input3-group1" name="input3-group1" placeholder=".." /> */}
                      <CInputGroupAppend>
                        <CInputGroupText>.00</CInputGroupText>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup >
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="accessory_qty" name="accessory_qty" defaultValue={accessory.accessory_qty} ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Warranty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                      <div className="controls">
                      
                        <CInputGroup>
                          <CInput id="appendedInput" size="12" type="text" />
                          <CInputGroupAppend>
                            <CInputGroupText>months</CInputGroupText>
                          </CInputGroupAppend>
                        </CInputGroup>
                        
                      </div>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Default Location</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_defaultlocation" id="accessory_defaultlocation" defaultValue={accessory.accessory_defaultlocation} ref={register}>
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
                    <CLabel htmlFor="textarea-input">Notes</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      custom name="accessory_description" 
                      id="accessory_description" 
                      rows="2"
                      placeholder="Content..." 
                      defaultValue={accessory.accessory_notes}
                    />
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
                <CButton type="reset" size="md" color="primary" className="mr-1 px-4">  Save</CButton>
                <CancelButton size='md' location='/views/accessories' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>

      
    )
}

export default UpdateAccessory