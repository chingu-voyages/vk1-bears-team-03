import React, {useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CCallout
} from '@coreui/react'

import {
    CChartBar,
    CChartLine,
    CChartHorizontalBar,
  } from '@coreui/react-chartjs'

import MainChartExample from '../charts/MainChartExample.js'


  const Reports = () => {

    const { requestCount, getRequestCount, userCount, getUserCount, requestCount1Year, getRequestCount1Year, memberCount1Year, getMemberCount1Year, assetCount1Year, getAssetCount1Year } = useContext(GlobalContext)
    useEffect(() => {
      getRequestCount()
      getUserCount()
      getRequestCount1Year()
      getMemberCount1Year()
      getAssetCount1Year()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

let colors = [
    '#EFEE69',
    '#C5E16A',
    '#9FD26E',
    '#7CC272',
    '#5EB075',
    '#439E77',
    '#2F8B75',
    '#227970',
    '#1F6668',
    '#20535C',
    '#22424E',
    '#21313E',
    
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
    // '#' + Math.floor(Math.random()*16777215).toString(16),
]

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
                        <small className="text-muted">Total Requests</small><br />
                        <strong className="h4">{requestCount}</strong>
                    </CCallout>
                </CCol>
                <CCol col="12" sm="6">
                    <CCallout color="info" className={'bg-secondary'}>
                        <small className="text-muted">Total Members</small><br />
                        <strong className="h4">{userCount}</strong>
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
                        label: '2021',
                        backgroundColor: ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600', '#d45072', '#f95d7b', '#ff7c90', '#ffa805'],
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: requestCount1Year,
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
                        label: '2021',
                        fill: false,
                        backgroundColor: ["#044BF","#A9FDAC","#44CF6C","#32A287","#6C464E","#2B4162","#E0E0E2"],
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: ['rgba(255,99,132,1)'],
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: memberCount1Year
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
                <CCol><h3>Assets</h3></CCol>
            </CRow>
            <CChartHorizontalBar
                    style={{height: '500px'}}
                    datasets={[
                        {
                        label: '2021',
                        fill: false,
                        backgroundColor: colors,
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: ['rgba(255,99,132,1)'],
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        tooltipLabelColor: 'rgba(255,99,132,1)',
                        data: memberCount1Year
                        }
                    ]}
                    options={{
                        maintainAspectRatio: false,
                        tooltips: {
                        enabled: true
                        }
                    }}
                    labels={[
                        'January', 'February', 'March', 'April',
                        'May', 'June', 'July','August','September',
                        'October','November','December'
                    ]}></CChartHorizontalBar>
        </CCardBody>
        </CCard>
      </>
    )
  }
  
  export default Reports
  