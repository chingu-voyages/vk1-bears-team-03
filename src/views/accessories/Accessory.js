import React, {useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import accessoriesData from './AccessoriesData'

const Accessory = ({match}) => {

  const { accessories, getAccessories } = useContext(GlobalContext)
  useEffect(() => {
    getAccessories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  // const accessory = accessoriesData.find( accessory => accessory.id.toString() === match.params.id)
  const accessory = accessories.find( accessories => accessories.id.toString() === match.params.id)

  
  const accessoryDetails = accessory ? Object.entries(accessory) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Accessory id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    accessoryDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accessory
