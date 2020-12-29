import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import {
  CDataTable,
  CButton,
  CRow, CCol
} from '@coreui/react'
import { Route } from 'react-router-dom'

// import Search from "../search/Search"
import Itemspage from '../itemspage/Itemspage'


const Requests = () => {

  const { pendingRequests, getPendingRequests } = useContext(GlobalContext)
  useEffect(() => {
    getPendingRequests()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [details, setDetails] = useState([])

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
    { key: '_id'},
    { key: 'item_name' },
    'user_name', 'request_type', 'request_status', 'request_date',
    {
      key: 'show_details',
      label: 'Actions',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const [modal, setModal] = useState(false)
  
  const toggle = () => {
    setModal(!modal);
  }

  return (
    <CDataTable
      overTableSlot = { 
      <CRow>
        <CCol className="d-flex justify-content-sm-start mb-2">
              {/* <Search /> */}
              <Itemspage />
          </CCol>
          
      </CRow>
    }
      items={pendingRequests}
      fields={fields}
      hover
      pagination
      scopedSlots = {{
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
              <Route render={({ history}) => (
              <CButton
                color="primary"
                size="sm"
                onClick={() => { history.push(`requests/${item._id}`) }}>
                View
              </CButton>
              )}/>
              </td>
            )
      }
      }
    }
    />
  )
  }
  
  export default Requests