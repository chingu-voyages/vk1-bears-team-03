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




  const Reports = () => {
    return (
      <>
        <CCard>
          <CCardHeader>
           Reports page
          </CCardHeader>
          <CCardBody>

{/*-------Start of Callout (New Assets and New Members)----------*/}

            <CRow className="mb-5">
                <CCol col="12" sm="6">
                    <CCallout color="info" className={'bg-secondary'}>
                        <small className="text-muted">New Assets (past 30 days)</small><br />
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

{/*-------End of Callout (New Assets and New Members)----------*/}

{/*-------Start of Assets Chart----------*/}

            <CRow>
                <CCol sm="12" lg="6">
                    <h3>Assets</h3>
                    <CChartBar
                    type="doughnut"
                    datasets={[
                        {
                        label: '2019',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        tooltipLabelColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                        label: '2020',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
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
                        'May', 'June', 'July'
                    ]}></CChartBar>
                </CCol>
{/*-------End of Assets Chart----------*/}

{/*-------Start of Members Chart----------*/}

                <CCol sm="12" lg="6">
                    <h3>Members</h3>
                    <CChartDoughnut
                    datasets={[
                        {
                        label: '2020',
                        backgroundColor: ["#044BF","#A9FDAC","#44CF6C","#32A287","#6C464E","#2B4162","#E0E0E2"],
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: ['rgba(255,99,132,1)'],
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
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
                        'May', 'June', 'July'
                    ]}></CChartDoughnut>
                </CCol>
{/*-------End of Members Chart----------*/}

            </CRow>
          </CCardBody>
        </CCard>
      </>
    )
  }
  
  export default Reports
  