import React from 'react'
import { Route } from 'react-router-dom'
import {
    CButton
} from '@coreui/react'

const BackButton = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="md" color="info" className="mr-1" onClick= {() => { history.push('/users') }}>
                  Back
            </CButton>
              )}/>

    )
}
export default BackButton