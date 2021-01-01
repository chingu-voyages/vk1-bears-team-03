import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Asset = ({match}) => {
  const { assets, getAssets } = useContext(GlobalContext)


  useEffect(() => {
      etgAssets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const asset = assets.find( asset => asset.id.toString() === match.params.id)
  const assetDetails = asset ? Object.entries(asset) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
    
  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            Asset id: {match.params.id}
          </CCardHeader>
          <CCardBody>
              <table className="table table-striped table-hover">
              
              
                <tbody>
                  {
                    assetDetails.map(([, key, value], index) => {
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

export default Asset
