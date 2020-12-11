import React from 'react'
import { CButton } from '@coreui/react'
import { Route } from 'react-router-dom'

const BackButton = (props) => {
    const webPath = props.location
    return (
        <Route render={({ history}) => (
            <CButton size="md" color="info" className="m-1 px-4 py-1"  onClick= {() => { history.push(webPath) }} >
               Back
            </CButton>
        )} />
    )
}

export default BackButton