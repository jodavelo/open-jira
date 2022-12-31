
import React from 'react'
import { Paper, List } from '@mui/material';
import { EntryCard } from './';

export const EntryList = () => {
    return (
        // TODO: Aqui haremos drop
        <div>   
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'none', backgroundColor: 'transparent', padding: '3px 5px' }}>
                {/* TODO: Cambiará dependiendo si se esta haciendo drag o no */}
                <List sx={{ opacity: 1 }}>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                    <EntryCard/>
                </List>
            </Paper>
            
        </div>
    )
}
