import React from 'react'
import { Route } from 'react-router-dom'

import {
    CButton
} from '@coreui/react'

const SinglePrintButton = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/views/printbutton/singleprint') }}>
                  Print
            </CButton>
              )}/>

    )
}
export default SinglePrintButton