
import React from 'react'
import { Button } from '@mui/material'

import SaveIcon from '@mui/icons-material/Save';

export const NewEntry = () => {
    return (
        <>
            <Button
                variant='outlined'
                color='secondary'
                endIcon={ <SaveIcon/> }
            >
                Save
            </Button>
        </>
    )
}
