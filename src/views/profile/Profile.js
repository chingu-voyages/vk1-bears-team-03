import React from 'react'
import {CContainer, CRow, CCol, CCardHeader, CCardBody, CCardFooter, CInput, CSelect, CCard} from '@coreui/react'

import profile from './profile.png'
// import usersData from "./UsersData"

const Profile = () => {
    return (
        <CContainer fluid>
        <CRow>
          <CCol sm="4">
            <CCard>
              <CCardBody className="text-center">
                <img src={profile} className="rounded mx-auto d-block" alt="Profile"></img>
                <h3 className="my-1"> This is my name </h3>
                <p>email@email.com</p>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol sm="6">
            <CCard>
              <CCardHeader>
                Profile
              </CCardHeader>
              <CCardBody>
                    <CRow className = "my-2">
                    <CCol sm="12">
                        <CInput
                        label="Name"
                        placeholder="Enter your name"
                        />
                    </CCol>
                    </CRow>
                    <CRow className = "my-2">
                    <CCol sm="12">
                        <CInput
                        label="Credit Card Number"
                        placeholder="0000 0000 0000 0000"
                        />
                    </CCol>
                    </CRow>
                    <CRow className = "my-2">
                    <CCol sm="4">
                        <CSelect
                        label="Month"
                        options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                        />
                    </CCol>
                    <CCol sm="4">
                        <CSelect
                        label="Year"
                        options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                        />
                    </CCol>
                    <CCol sm="4">
                        <CInput
                        label="CVV/CVC"
                        placeholder="123"
                        />
                    </CCol>
                    </CRow>
              </CCardBody>
              <CCardFooter>
                Footer.
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        </CContainer>
      )
}

export default Profile
