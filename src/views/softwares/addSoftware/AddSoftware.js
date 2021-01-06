import React, {useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import { Route } from 'react-router-dom'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CTextarea, CInputGroupText, CInputGroupAppend, CInputGroupPrepend, CInputGroup, CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'

const AddSoftware = () => {
  const { register, handleSubmit } = useForm()   
  const {  addSoftware } = useContext(GlobalContext)

  // const onSubmit = data => console.log("This is from onSubmit", data);
  const clearForm = () => {
    document.getElementById("softwareForm").reset();
    // this.refs.fieldorg.value="";
    // this.refs.fieldNum.value="";
  }
  //
  const onSubmit = (data) => {
    // const assetID = await assets.findById(data._id)
    
    // if(assetID){
    //   alert("Asset is already registered! Check Serial number")
    // }
    console.log(data)
    try {
      const newSoftware= {
            software_name: data.software_name,
            software_category:data.software_category,
            software_key:data.software_key,
            software_qty:data.software_qty,
            software_manufacturer:data.software_manufacturer,
            software_purchasedate:data.software_purchasedate,
            software_expirationdate:data.software_expirationdate,
            software_supplier:data.software_supplier,
            software_invoicenum:data.software_invoicenum,
            software_purchasecost:data.software_purchasecost,
            software_notes:data.software_notes,
        }
        
        addSoftware(newSoftware)
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
          <BackButton location='/softwares' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='locationForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Software Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="software_name" name="software_name" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Category</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CSelect custom name="select" id="select"> */}
                    <select className = 'form-control' custom name="software_category" id="software_category" ref={register}>
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
                    <CLabel htmlFor="textarea-input">License Key</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      custom name="software_key" 
                      id="software_key" 
                      rows="2"
                      placeholder="Content..." 
                      ref={register}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Quantity</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="software_qty" name="software_qty" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="software_manufacturer" id="software_manufacturer" ref={register}>
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
                  <input className = 'form-control' type="text" id="software_purchasedate" name="software_purchasedate" ref={register} />
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Expiration Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="software_expirationdate" name="software_expirationdate" ref={register} />
                  {/* <CInput type="date" id="date-input" name="date-input" placeholder="date" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Supplier</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <select className = 'form-control' custom name="software_supplier" id="software_supplier" ref={register}>
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
                  <input className = 'form-control' type="text" id="software_invoicenum" name="software_invoicenum" ref={register} />
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
                      <input className = 'form-control' type="text" id="software_purchasecost" name="software_purchasecost" ref={register} />
                      {/* <CInput id="input3-group1" name="input3-group1" placeholder=".." /> */}
                      <CInputGroupAppend>
                        <CInputGroupText>.00</CInputGroupText>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup >
        
                    
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="textarea-input">Notes</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      custom name="software_notes" 
                      id="software_notes" 
                      rows="2"
                      placeholder="Content..."
                      ref={register} 
                    />
                  </CCol>
                </CFormGroup>
                
                <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                <CButton type="submit" size="md" color="primary" className="mr-1">  Save</CButton>
              
                <Route render={({ history}) => (
                  <CButton type="submit" size="md" color="danger" className="mr-1" onClick= {() => { history.push('/softwares') }}>
                        Cancel
                  </CButton>
                )}/>
                
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
      </CCol>

      
    )
}

export default AddSoftware