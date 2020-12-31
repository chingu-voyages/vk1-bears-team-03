// import React, {useContext, useEffect, useState} from 'react'
// import { GlobalContext } from '../../context/GlobalState'
// import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import categoriesData from './CategoriesData'
// // import { Category } from '@material-ui/icons'

// const Category = ({match}) => {


//   const { categories, getCategories } = useContext(GlobalContext)

//    useEffect(() => {
//     getCategories()
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const category = categories.find( category => category._id === match.params.id)

//   // const category = categoriesData.find( category => category.id.toString() === match.params.id)
//   const categoriesDetails = category ? Object.entries(category) : 
//     [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

//   return (
//     <CRow>
//       <CCol lg={12}>
//         <CCard>
//           <CCardHeader>
//             Category id: {match.params.id}
//           </CCardHeader>
//           <CCardBody>
//               <table className="table table-striped table-hover">
//                 <tbody>
//                   {
//                     categoriesDetails.map(([key, value], index) => {
//                       return (
//                         <tr key={index.toString()}>
//                           <td>{`${key}:`}</td>
//                           <td><strong>{value}</strong></td>
//                         </tr>
//                       )
//                     })
//                   }
//                 </tbody>
//               </table>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default Category
