import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  // CDropdown,        <--- for Dropdown Gear Icon on the Cards
  // CDropdownMenu,    <--- for Dropdown Gear Icon on the Cards
  // CDropdownItem,    <--- for Dropdown Gear Icon on the Cards
  // CDropdownToggle   <--- for Dropdown Gear Icon on the Cards
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import ChartLineSimple from '../charts/ChartLineSimple'
// import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <>
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header="923"
          text="All Assets"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 120, 125, 132]}
              pointHoverBackgroundColor="primary"
              label="Total Assets"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/assets"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-info"
          header="25"
          text="Members"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 15, 9, 22, 14, 20, 25]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Total Members"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/users"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-warning"
          header="2"
          text="Pending Requests"
          footerSlot={
          <>
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[55, 50, 45, 30, 24, 12, 10]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Total Requests"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/request"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>

{/*-------2nd Row-------*/}

    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-success"
          header="923"
          text="All Software Licenses"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 120, 125, 132]}
              pointHoverBackgroundColor="success"
              label="Total Assets"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/assets"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-danger"
          header="25"
          text="All Permits"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 15, 9, 22, 14, 20, 25]}
              pointHoverBackgroundColor="danger"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Total Members"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/users"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-dark"
          header="2"
          text="All Consumables"
          footerSlot={
          <>
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[55, 50, 45, 30, 24, 12, 10]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="dark"
              label="Total Requests"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/request"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
    </>
  )
}

export default WidgetsDropdown
