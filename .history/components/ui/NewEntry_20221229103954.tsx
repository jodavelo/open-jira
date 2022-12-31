
import React from 'react'
import { Button, Box } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';

export const NewEntry = () => {
    return (
        <>
            <Box>
                <Button
                    variant='text'

                >
                    Cancel
                </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    endIcon={ <SaveIcon/> }
                >
                    Save
                </Button>
            </Box>
        </>
    )
}
