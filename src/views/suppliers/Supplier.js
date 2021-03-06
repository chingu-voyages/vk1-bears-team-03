import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import suppliersData from './SuppliersData'

const Supplier = ({match}) => {

  const { suppliers, getSuppliers } = useContext(GlobalContext)

   useEffect(() => {
    getSuppliers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const supplier = suppliers.find( suppliers => suppliers.id.toString() === match.params.id)

  const supplierDetails = supplier ? Object.entries(supplier) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]


  // const supplier = suppliersData.find( supplier => supplier.id.toString() === match.params.id)
  // const supplierDetails = supplier ? Object.entries(supplier) : 
  //   [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Suppliers {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
                <tbody>
                  {
                    supplierDetails.map(([key, value], index) => {
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

export default Supplier
