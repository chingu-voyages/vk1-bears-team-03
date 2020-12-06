import React from 'react'
import { Route } from 'react-router-dom'
import {
    CButton
} from '@coreui/react'

const PrintButton = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/views/users') }}>
                  Print All
            </CButton>
              )}/>

    )
}
export default PrintButton