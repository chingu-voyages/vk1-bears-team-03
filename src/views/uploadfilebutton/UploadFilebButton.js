import React from 'react'
import {
    CCol, CInputFile, CLabel
} from '@coreui/react'

const UploadFileButton = () => {
    return (
        <CCol xs="12" md="1">
                
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                    </CLabel>
                  </CCol>

    )
}
export default UploadFileButton