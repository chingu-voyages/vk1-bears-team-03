import React, {useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  
} from '@coreui/react'

import { CButton } from '@coreui/react'
import ChartLineSimple from '../charts/ChartLineSimple'

const WidgetsDropdown = () => {

  const { pendingRequestCount, getPendingRequestCount, assetCount, getAssetCount, userCount, getUserCount, archivedRequestCount, getArchivedRequestCount } = useContext(GlobalContext)
  useEffect(() => {
    getAssetCount()
    getUserCount()
    getPendingRequestCount()
    getArchivedRequestCount()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetDropdown
          color="gradient-primary"
          header={assetCount}
          text="All Assets"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[assetCount]}
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
          header={userCount}
          text="All Users"
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
          header={pendingRequestCount}
          text="Pending Requests"
          footerSlot={
          <>
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[1, 15, 9, 22, 14, 20, 25]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Total Pending Requests"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/requests"
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
          header={archivedRequestCount}
          text="All Archived Requests"
          footerSlot={
          <>
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 84, 84, 120, 125, 132]}
              pointHoverBackgroundColor="success"
              label="Total Archived Requests"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="/views/archived-requests"
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
          header="90"
          text="All Locations"
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
              to="/views/permits"
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
          header="205"
          text="All Departments"
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
              to="/views/consumables"
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