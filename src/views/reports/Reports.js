import React from 'react'
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CCallout
} from '@coreui/react'

import {
    CChart,
    CChartBar,
    CChartLine,
    CChartDoughnut,
    CChartPie,
  } from '@coreui/react-chartjs'

import MainChartExample from '../charts/MainChartExample.js'




  const Reports = () => {
    return (
      <>
        <CCard>
          <CCardHeader>
           Reports page
          </CCardHeader>
          <CCardBody>

{/*-------Start of Callout (New Requests and New Members)----------*/}

            <CRow className="mb-5">
                <CCol col="12" sm="6">
                    <CCallout color="info" className={'bg-secondary'}>
                        <small className="text-muted">New Requests (past 30 days)</small><br />
                        <strong className="h4">29,123</strong>
                    </CCallout>
                </CCol>
                <CCol col="12" sm="6">
                    <CCallout color="info" className={'bg-secondary'}>
                        <small className="text-muted">New Members (past 30 days)</small><br />
                        <strong className="h4">2,643</strong>
                    </CCallout>
                </CCol>
            </CRow>

{/*-------End of Callout (New Requests and New Members)----------*/}

{/*-------Start of Requests Chart----------*/}

            <CRow>
                <CCol sm="12" lg="6">
                    <h3>Requests</h3>
                    <CChartBar
                    type="doughnut"
                    datasets={[
                        {
                        label: '2020',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100,65,87,64,34,78]
                        }
                    ]}
                    options={{
                        aspectRatio: 1.5,
                        tooltips: {
                        enabled: true
                        }
                    }}
                    labels={[
                        'January', 'February', 'March', 'April',
                        'May', 'June', 'July','August','September',
                        'October','November','December'
                    ]}></CChartBar>
                </CCol>
{/*-------End of Requests Chart----------*/}

{/*-------Start of Members Chart----------*/}

                <CCol sm="12" lg="6">
                    <h3>Members</h3>
                    <CChartLine
                    datasets={[
                        {
                        label: '2020',
                        fill: false,
                        backgroundColor: ["#044BF","#A9FDAC","#44CF6C","#32A287","#6C464E","#2B4162","#E0E0E2"],
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: ['rgba(255,99,132,1)'],
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 30, 60, 35, 60,54,78,81,55,80]
                        }
                    ]}
                    options={{
                        aspectRatio: 1.5,
                        tooltips: {
                        enabled: true
                        }
                    }}
                    labels={[
                        'January', 'February', 'March', 'April',
                        'May', 'June', 'July','August','September',
                        'October','November','December'
                    ]}></CChartLine>
                </CCol>
{/*-------End of Members Chart----------*/}

            </CRow>
          </CCardBody>
        </CCard>
        <CCard className="mt-3">
            <CCardBody>
            <CRow>
                <CCol><h3>Inventory</h3></CCol>
            </CRow>
        <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        </CCard>
      </>
    )
  }
  
  export default Reports
  