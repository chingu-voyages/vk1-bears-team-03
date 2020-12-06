import React from 'react'
import { Route } from 'react-router-dom'
import {
    CButton
} from '@coreui/react'

const BackButtonAssets = () => {
    
    return (
        <Route render={({ history}) => (
            <CButton size="sm" color="info" className="mr-1" onClick= {() => { history.push('/src/views/assets') }}>
                  Back
            </CButton>
              )}/>

    )
}
export default BackButtonAssets