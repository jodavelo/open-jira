
import React, { FC } from 'react'
import { Paper, List } from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    console.log(status)

    return (
        // TODO: Aqui haremos drop
        <div>   
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
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
