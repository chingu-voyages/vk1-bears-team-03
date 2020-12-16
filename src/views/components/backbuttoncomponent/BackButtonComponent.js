import React from 'react'
import { Route } from 'react-router-dom'
import {
    CButton
} from '@coreui/react'

const BackButtonComponent = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="md" color="info" className="mr-1" onClick= {() => { history.push('/views/component') }}>
                  Back
            </CButton>
              )}/>

    )
}
export default BackButtonComponent