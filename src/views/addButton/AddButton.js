import React from 'react'
import { CButton } from '@coreui/react'

const Button = (props) => {
    return (
        <CButton size="md" color="primary" className="m-1 px-4 py-1">
                      {props.label}
        </CButton>
    )

}

export default Button