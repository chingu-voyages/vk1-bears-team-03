import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { useForm } from 'react-hook-form'
import {
  CForm,CCardBody, CCol, CCard, CCardHeader, CFormGroup, CLabel, CButton, CCardFooter

} from '@coreui/react'
import BackButton from '../../backButton/BackButton'
import CancelButton from '../../cancelbutton/CancelButton'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const { register, handleSubmit } = useForm()

  //SET CURRENT URL
  let history = useHistory();
  const { users, getUsers, addNewUser} = useContext(GlobalContext)

  useEffect(() => {
    getUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  
  // CLEARING FORM FIELDS
  const clearForm = () => {
    document.getElementById("userForm").reset();

  }

  //HANDLE ON SUBMIT
  const onSubmit = async (data) => {

    const username = users.find(user => user.username === data.username)
    const email = users.find(user => user.email === data.email)
    let newUser = {}

    try {
      if(username) {
        alert("Username already exists! Please enter a different username.")
      }else if (email) {
        alert("Email already exists! Please enter a different email.")
      } else {

      newUser = {
              first_name: data.first_name,
              last_name: data.last_name,
              username: data.username,
              password: data.password,
              email: data.email,
              user_role: data.user_role,
              is_active: true
          }
          
          addNewUser(newUser)
          alert("User successfully created")
          clearForm()
          setTimeout(()=>history.push('/users'), 700);
      }
      
    } catch (err) {
      alert(`${err}`)
    }
    console.log(data)
    console.log(newUser)
  }
  
    return (
          <CCol xs="12" md="6" lg="12" className="mb-4">
             <CCard>
             <CCardHeader>
              <BackButton location='/users' />
              <CButton type="reset" size="md" color="danger" className="mr-1" onClick={clearForm}> Reset</CButton>
             </CCardHeader>
             <CForm id='userForm' onSubmit = {handleSubmit(onSubmit) } >
              <CCardBody>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="first_name">First Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <input className = 'form-control' type="text" name="first_name" ref={register} required='true'/>
                    </CCol>
                </CFormGroup>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="last_name">Last Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <input className = 'form-control' type="text" name="last_name" ref={register} required='true' />
                    </CCol>
                </CFormGroup>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="username">Username</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <input className = 'form-control' type="text" name="username" ref={register} required='true'/>
                    </CCol>
                </CFormGroup>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="password">Password</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <input className = 'form-control' type="password" name="password" ref={register} required='true'/>
                    </CCol>
                </CFormGroup>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="email">Email Address</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <input className = 'form-control' type="email" name="email" ref={register} required='true'/>
                    </CCol>  
                </CFormGroup>

                <CFormGroup row>
                    <CCol md="2" className="d-flex justify-content-sm-end">
                      <CLabel htmlFor="user_role">User Role</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <select className = 'form-control' custom name="user_role" id="user_role" ref={register} required='true'>
                        <option >Please select</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </CCol>
                </CFormGroup>

              <CCardFooter row>
                <CCol md="12" className="d-flex justify-content-sm-end">
                  <CButton type="submit" size="md" color="primary" className="mr-1 px-4" >Save</CButton>
                  <CancelButton size='md' location='/users' />              
                </CCol>
              </CCardFooter>

            </CCardBody>
          </CForm>
        </CCard>
      </CCol>
          
      )
          
}

export default AddUser