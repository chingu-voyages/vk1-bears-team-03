import React from 'react'
import { CButton } from '@coreui/react'
import { Route } from 'react-router-dom'

const CancelButton = (props) => {
    const webPath = props.location
    const size = props.size
    return (
        <Route render={({ history}) => (
            <CButton size={size} color="danger" className="px-4" onClick= {() => { history.push(webPath) }} >
               Cancel
            </CButton>
        )} />
    )
}

export default CancelButton