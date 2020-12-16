import React from 'react'
import { CButton } from '@coreui/react'
import { Route } from 'react-router-dom'

const AddButton = (props) => {
    const webPath = props.location
    return (
        <Route render={({ history}) => (
            <CButton size="md" color="primary" className="mr-1 mb-2 px-3"  onClick= {() => { history.push(webPath) }} >
                Create New
            </CButton>
        )} />
    )
}

export default AddButton