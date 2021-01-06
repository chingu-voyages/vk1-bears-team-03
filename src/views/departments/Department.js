import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'


// import departmentsData from './DepartmentsData'

// softwaresData.forEach(software => console.log(software))
//
const Department = ({match}) => {

  const { departments, getDepartments } = useContext(GlobalContext)

   useEffect(() => {
    getDepartments()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const department = departments.find( departments => departments.id.toString() === match.params.id)

  const departmentDetails = department ? Object.entries(department) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            Departments Page {match.params.id}
          </CCardHeader>
          <CCardBody>
          <table className="table table-striped table-hover">
                <tbody>
                  {
                    departmentDetails.map(([key, value], index) => {
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

export default Department
