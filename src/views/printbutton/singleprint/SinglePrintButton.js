import React from 'react'
import { Route } from 'react-router-dom'

import {
    CButton
} from '@coreui/react'

const SinglePrintButton = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="md" color="info" className="mr-1 px-4" onClick= {() => { history.push('/views/printbutton/singleprint') }}>
                  Print
            </CButton>
              )}/>

    )
}
export default SinglePrintButton