import React, {useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  
} from '@coreui/react'

import { CButton } from '@coreui/react'
import ChartLineSimple from '../charts/ChartLineSimple'

const temp = localStorage.getItem('token');

const WidgetsDropdown = () => {

  const { 
    pendingRequestCount, 
    getPendingRequestCount, 
    assetCount, 
    getAssetCount, 
    userCount, 
    getUserCount, 
    archivedRequestCount, 
    getArchivedRequestCount,
    userCount7Days,
    getUserCount7Days,
    assetCount7Days, 
    getAssetCount7Days,
    pendingRequestCount7Days,
    getPendingRequestCount7Days,
    allArchivedRequestCount7Days,
    getAllArchivedRequestCount7Days,
  } = useContext(GlobalContext)

  useEffect(() => {
    getAssetCount()
    getUserCount(temp)
    getPendingRequestCount()
    getArchivedRequestCount()
    getUserCount7Days(temp)
    getAssetCount7Days()
    getPendingRequestCount7Days()
    getAllArchivedRequestCount7Days()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
    <CRow>
      <CCol sm="6" lg="6">
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
              dataPoints={assetCount7Days}
              pointHoverBackgroundColor="primary"
              label="Total Assets"
              labels="months"
            />
            <CButton
              color = "outline-secondary"
              className="text-white"
              to="assets"
            >
              More Info
            </CButton>
          </>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
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
              dataPoints={userCount7Days}
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
      </CRow>

{/*-------2nd Row-------*/}
<CRow>

      <CCol sm="6" lg="6">
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
              dataPoints={pendingRequestCount7Days}
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

  
      <CCol sm="6" lg="6">
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
              dataPoints={allArchivedRequestCount7Days}
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
    </CRow>
    </>
  )
}

export default WidgetsDropdown