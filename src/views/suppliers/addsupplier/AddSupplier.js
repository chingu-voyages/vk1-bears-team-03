import React, {useContext} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter, CForm

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'

const AddSupplier = () => {
  const { register, handleSubmit } = useForm()   
  const { addSupplier } = useContext(GlobalContext)

  
  const clearForm = () => {
    document.getElementById("supplierForm").reset();
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
      const newSupplier= {
          supplier_address: data.supplier_address,
          supplier_name:data.supplier_name,
          supplier_country:data.supplier_country,
          supplier_zipcode: data.supplier_zipcode,
          supplier_contactname:data.supplier_contactname,
          supplier_phonenumber:data.supplier_phonenumber,
          supplier_emailaddress:data.supplier_emailaddress,
          supplier_notes:data.supplier_notes,
        }
        
        addSupplier(newSupplier)
        
        alert("Successfully Added!")
        clearForm()
    } catch (err) {
      alert(`${err}`)
    }
    console.log(data)
  }


    return(
        
      
        <CCol xs="12" md="6" lg="12" className="mb-4">
        <CCard>
          <CCardHeader>
          <BackButton location='/suppliers' />
          <CButton type="reset" size="md" color="danger" className="mr-1"> Reset</CButton>
          </CCardHeader>
          <CForm id='supplierForm' onSubmit = {handleSubmit(onSubmit) } >
          <CCardBody>
          <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Supplier Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="supplier_name" name="supplier_name" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                 
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="supplier_address" name="supplier_address" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="select">Country</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CSelect custom name="select" id="select"> */}
                    <select className = 'form-control' custom name="supplier_country" id="supplier_country" ref={register}>
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
                  <input className = 'form-control' type="text" id="supplier_zipcode" name="supplier_zipcode" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Contact Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                    <input className = 'form-control' type="text" id="supplier_contactname" name="supplier_contactname" ref={register} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Phone Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                    <input className = 'form-control' type="text" id="supplier_phonenumber" name="supplier_phonenumber" ref={register} />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="text-input">Email Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text" id="supplier_emailaddress" name="supplier_emailaddress" ref={register} />
                    {/* <CInput id="text-input" name="text-input" placeholder="" /> */}
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                <CCol md="2" className="d-flex justify-content-sm-end">
                    <CLabel htmlFor="supplier_notes">Notes</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                  <input className = 'form-control' type="text-area" id="supplier_notes" name="supplier_notes" ref={register} />
                    {/* <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="2"
                      placeholder="Content..." 
                    /> */}
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
                <CancelButton size='md' location='/suppliers' />              
              </CCol>
            </CCardFooter>
          </CCardBody>
          </CForm>
        </CCard>
        
      </CCol>

      
    )
}

export default AddSupplier