import React from 'react'
import { Route } from 'react-router-dom'
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import {
    CButton
} from '@coreui/react'

const PrintButton = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/views/seeallassets') }}>
                  Print All
            </CButton>
              )}/>

    )
}
export default PrintButton