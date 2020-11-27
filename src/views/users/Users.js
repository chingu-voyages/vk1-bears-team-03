import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { CIcon } from '@coreui/icons-react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton, 
  CInput,
  CContainer,
  CCollapse
} from '@coreui/react'

import usersData from './UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

  const Users = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)


  const clicked = 0

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }
  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  // const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (item, index) => {

    const position = item.indexOf(index)
    // setDetails.push(position);
    return (
      <CCollapse show={position}>
        <CCardBody>
          <h4>
            {item.username}
          </h4>
          <p className="text-muted">User since: {item.role}</p>
          <CButton size="sm" color="info">
            Update
          </CButton>
          <CButton size="sm" color="danger" className="ml-1">
            Delete
          </CButton>
        </CCardBody>
      </CCollapse>
    )
  }


  return (
    <>
    <CContainer>
      <CRow className="d-flex mb-3">
        <CCol>
                <CInput
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search user"
                  />
                {/* <CIcon name={'cid-search'} size={'lg'}/> */}
        </CCol>
        <CCol>
              <div className="d-flex justify-content-center">
              <CButton color="primary" size="lg">Add User</CButton>
              </div>
                
        </CCol>
      </CRow>
      
      <CRow>
        <CCol xl={12}>
          <CCard>
            <CCardHeader>
              Users
              <small className="text-muted"> example</small>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={[
                { key: 'id', _classes: 'font-weight-bold' },
                { key: 'name', _classes: 'font-weight-bold' },
                'user_name', 'user_role', 'email_address',
                {
                  key: 'show_details',
                  label: '',
                  _style: { width: '1%' },
                  sorter: false,
                  filter: false
                }
              ]}
              
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/users/${item.id}`)}
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
                            onClick={()=>{toggleDetails(item, index)}}
                          >
                            { clicked ? 'Hide' : 'Show'}
                          </CButton>
                        </td>
                        )
                    }
              }}
            />
              <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false} 
              align="center"
            />     
            
                
            </CCardBody>
          </CCard>
        </CCol>
      
      </CRow>
    </CContainer>
    </>
  )
}

export default Users
