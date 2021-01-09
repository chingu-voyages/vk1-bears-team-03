import React, {useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CInput,  CTextarea, CInputGroupText, CInputGroupAppend, CInputGroupPrepend, CInputGroup, CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const AddAccessory = () => {
  const { register, handleSubmit } = useForm()   
  const {  addAccessory } = useContext(GlobalContext)

  const clearForm = () => {
    document.getElementById("accessoryForm").reset();
    // this.refs.fieldorg.value="";
    // this.refs.fieldNum.value="";
  }
  const onSubmit = (data) => {
    // const assetID = await assets.findById(data._id)
    
    // if(assetID){
    //   alert("Asset is already registered! Check Serial number")
    // }
    // console.log(data)
    try {
      const newAccessory= {
            accessory_name: data.accessory_name,
            accessory_category:data.accessory_category,
            accessory_description:data.accessory_description,
            accessory_manufacturer:data.accessory_manufacturer,
            accessory_location:data.accessory_location,
            accessory_purchasedate:data.accessory_purchasedate,
            accessory_supplier:data.accessory_supplier,
            accessory_invoicenum:data.accessory_invoicenum,
            accessory_purchasecost:data.accessory_purchasecost,
            accessory_qty:data.accessory_qty,
            accessory_warranty:data.accessory_warranty,
            accessory_defaultlocation:data.accessory_defaultlocation,
            accessory_notes:data.accessory_notes,
            accessory_available:data.accessory_available,
        }
        
        addAccessory(newAccessory)
        alert("Successfully Added!")
        clearForm()
    } catch (err) {
      alert(`$err`)
    }
    // console.log(data)
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
                  <input className = 'form-control' type="text" id="accessory_name" name="accessory_name" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_category" id="accessory_category" ref={register}>
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
                      ref={register}
                    />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_manufacturer" id="accessory_manufacturer" ref={register}>
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
                  <select className = 'form-control' custom name="accessory_location" id="accessory_location" ref={register}>
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
                  <input className = 'form-control' type="text" id="accessory_purchasedate" name="accessory_purchasedate" ref={register} />
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Supplier</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="accessory_supplier" id="accessory_supplier" ref={register}>
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
                  <input className = 'form-control' type="text" id="accessory_invoicenum" name="accessory_invoicenum" ref={register} />
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
                          {/* <CIcon name="cil-euro" /> */} PHP
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input className = 'form-control' type="text" id="accessory_purchasecost" name="accessory_purchasecost" ref={register} />
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
                  <input className = 'form-control' type="text" id="accessory_qty" name="accessory_qty" ref={register} />
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
                  <select className = 'form-control' custom name="accessory_supplier" id="accessory_supplier" ref={register}>
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
                      custom name="accessory_notes" 
                      id="accessory_notes" 
                      rows="2"
                      placeholder="Content..." 
                      ref={register}
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

export default AddAccessory