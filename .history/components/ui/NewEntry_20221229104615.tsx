
import React from 'react'
import { Button, Box, TextField } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/AddCircleOutline';

export const NewEntry = () => {
    return (
        <>
            <Button
                startIcon={ <AddIcon/> }
                fullWidth
                variant='outlined'
            ></Button>
                Add
            <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='New entry'
                autoFocus
                multiline
                label='New entry'
                helperText='Please type a new entry'

            />
            <Box
                display='flex'
                justifyContent='space-between'
            >
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
