<<<<<<< HEAD
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'


const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Assets = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Theme colors
          <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-primary">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Grays
        </CCardHeader>
        <CCardBody>
          <CRow className="mb-3">
            <ThemeColor className="bg-gray-100">
              <h6>Gray 100 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-200">
              <h6>Gray 200 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-300">
              <h6>Gray 300 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-400">
              <h6>Gray 400 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-500">
              <h6>Gray 500 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-600">
              <h6>Gray 600 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-700">
              <h6>Gray 700 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-800">
              <h6>Gray 800 Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-gray-900">
              <h6>Gray 900 Colorhihihi</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Assets
=======
import React, { useState } from 'react'
// import { useHistory, useLocation } from 'react-router-dom'
// import { CIcon } from '@coreui/icons-react'
import {
  CBadge,
  CCardBody,
  CDataTable,
  CButton,
  CRow, CCol, 
  CCollapse, CModal, CModalHeader,CModalBody, CModalFooter
} from '@coreui/react'

import assetsData from "./AssetsData"
import Search from "../search/Search"
import Itemspage from '../itemspage/Itemspage'


const Assets = () => {
const [details, setDetails] = useState([])
// const [items, setItems] = useState(assetsData)

const toggleDetails = (index) => {
  const position = details.indexOf(index)
  let newDetails = details.slice()
  if (position !== -1) {
    newDetails.splice(position, 1)
  } else {
    newDetails = [...details, index]
  }
  setDetails(newDetails)
}


const fields = [
  { key: 'id'},
  { key: 'name'},
   'serial_number', 'asset_tag', 'status',
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

const getBadge = (status)=>{
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const [modal, setModal] = useState(false)

const toggle = () => {
  setModal(!modal);
}

return (
  <>
  <CDataTable
    overTableSlot = { 
          <CRow>
              <CCol>
              {/* <Route render={({ history}) => ( */}
                <CButton size="lg" color="primary" className="m-1 px-4 py-1">
                      + Add Asset
                </CButton>
              {/* // )} /> */}
              </CCol>
              <CCol className="d-flex justify-content-sm-end">
                  <Search />
                  <Itemspage />
              </CCol>
          </CRow>
    }
    items={assetsData}
    header
    fields={fields}
    hover
    pagination
    
    scopedSlots = {{
      'status':
        (item)=>(
          <td>
            <CBadge color={getBadge(item.status)}>
              {item.status}
            </CBadge>
          </td>
        ),
      'show_details':
        (item, index)=>{
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={()=>{toggleDetails(index)}}
              >
                {details.includes(index) ? 'Hide' : 'Show'}
              </CButton>
            </td>
            )
        },
      'details':
          (item, index)=>{
            return (
            <CCollapse show={details.includes(index)}>
              <CCardBody>
                <h4>
                  {item.name}
                </h4>
                <p className="text-muted">Role: {item.user_role}</p>
                <CButton size="sm" color="info" className="mr-1">
                  See All Assets
                </CButton>
                <CButton size="sm" color="info" className="mr-1">
                  Update
                </CButton>
                <CButton size="sm" color="danger" className="mr-1" onClick={toggle}>Delete</CButton>
                <CModal
                  show={modal}
                  onClose={toggle}
                >
                  <CModalHeader closeButton>Delete User</CModalHeader>
                  <CModalBody>
                    Are you sure you want to delete User?
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary">Yes</CButton>{' '}
                    <CButton
                      color="secondary"
                      onClick={toggle}
                    >Cancel</CButton>
                  </CModalFooter>
                </CModal>
              </CCardBody>
            </CCollapse>
          )
        }
        
    }}
        
  />

          
  </>
)
}
export default Assets
>>>>>>> devAubrey
