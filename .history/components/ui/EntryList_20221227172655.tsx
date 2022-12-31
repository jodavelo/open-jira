
import { Paper, List } from '@mui/material';
import React from 'react'

export const EntryList = () => {
    return (
        // TODO: Aqui haremos drop
        <div>   
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent' }}>
                {/* TODO: Cambiará dependiendo si se esta haciendo drag o no */}
                <List sx={{ opacity: 1 }}>
                    <h1>Item</h1>
                    <h1>Item</h1>
                    <h1>Item</h1>
                    <h1>Item</h1>
                    <h1>Item</h1>
                    <h1>Item</h1>
                    <h1>Item</h1>
                </List>
            </Paper>
            
        </div>
    )
}
