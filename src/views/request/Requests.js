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
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../../context/LoadingIndicator'


const Requests = () => {

  const { pendingRequests, getPendingRequests } = useContext(GlobalContext)
  useEffect(() => {
    trackPromise(getPendingRequests())
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

  const loading = LoadingIndicator()

  const fields = [
    { 
      key: '_id',
      label: 'Request ID',
      _style: { width: '15%' },
    },
    { 
      key: 'user_name',
      label: 'Requested By',
      sorter: false,
      filter: true
    },
    {
      key: 'item_name',
      label: 'Item Name'
    },
    'request_type', 'request_status', 'request_date',
    {
      key: 'show_details',
      label: 'Actions',
      _style: { width: '8%', textAlign: 'center' },
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
              <Itemspage/>
          </CCol>
          
      </CRow>
    }
      items={pendingRequests} 
      fields={fields}
      hover
      sorter
      noItemsViewSlot={loading}
      pagination
      scopedSlots = {{
        'user_name':
          (item)=>(
            <td>
              <CButton>
                {item.user_name.first_name} {item.user_name.last_name}
              </CButton>
            </td>
          ),
        'item_name':
          (item)=>(
            <td>
              <CButton>
                {item.item_name.asset_name}
              </CButton>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2" style={{textAlign: 'center'}}>
              <Route render={({ history}) => (
              <CButton
                color="primary"
                size="sm"
                onClick={() => { history.push(`requests/${item._id}`) }}>
                View Details
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