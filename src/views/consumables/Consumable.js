import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import consumablesData from './ConsumablesData'

const Consumable = ({match}) => {

const { consumables, getConsumables } = useContext(GlobalContext)

   useEffect(() => {
    getConsumables()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  // const consumable = consumablesData.find( consumable => consumable.id.toString() === match.params.id)
  const consumable = consumables.find( consumables => consumables.id.toString() === match.params.id)


  const consumableDetails = consumable ? Object.entries(consumable) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Consumable id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    consumableDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>
                        </td>
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

export default Consumable
