
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
        //console.log(inputValue)
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return;
        //console.log({ inputValue })
        addNewEntry( inputValue )
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
                            helperText={inputValue.length <= 0 && touched && 'Please type a new entry'}
                            error={ inputValue.length <= 0 && touched }
                            value={ inputValue }
                            onChange={ onTextFieldChanged }
                            onBlur={ () => setTouched(true) }
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
                                onClick={ () => onSave() }
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
