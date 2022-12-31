
import React, { FC, useContext, useMemo } from 'react'
import { Paper, List } from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';


interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext( EntriesContext );

    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries]);

    return (
        // TODO: Aqui haremos drop
        <div>   
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
                {/* TODO: Cambiará dependiendo si se esta haciendo drag o no */}
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }
                </List>
            </Paper>
            
        </div>
    )
}
