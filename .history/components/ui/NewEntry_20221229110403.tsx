
import React, { ChangeEvent, useState } from 'react'
import { Button, Box, TextField } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/AddCircleOutline';

export const NewEntry = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    }

    return (
        <Box
            sx={{ marginBottom: 2, paddingX: 2 }}
        >
            
            {
                isAdding ?
                (
                    <>
                        <TextField
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='New entry'
                            autoFocus
                            multiline
                            label='New entry'
                            helperText='Please type a new entry'
                            error={ false }
                            value={ inputValue }
                            onChange={ onTextFieldChanged }
                        />
                        <Box
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Button
                                variant='text'
                                onClick={ () => setIsAdding(false) }
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
                ) : 
                (
                    <Button
                        startIcon={ <AddIcon/> }
                        fullWidth
                        variant='outlined'
                        onClick={ () => setIsAdding(true) }
                    >Add</Button> 
                )
            }


            

        </Box>
    )
}
