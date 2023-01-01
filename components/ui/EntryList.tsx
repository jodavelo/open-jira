
import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { Paper, List } from '@mui/material';
import { EntryCard } from './';
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css';

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext );
    const { isDragging, setEndDragging } = useContext( UIContext );

    const entriesByStatus = useMemo(() => entries.filter( entry => entry.status === status ), [entries]);

    const allowEntry = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

    const onDrop = ( event: DragEvent<HTMLDivElement> ) => {
        const id = event.dataTransfer.getData('text');
        const entry = entries.find( e => e._id === id )!;
        entry.status = status;
        updateEntry( entry ); 
        setEndDragging();
    }

    return (
        // TODO: Aqui haremos drop
        <div
            onDrop={ onDrop }
            onDragOver={ allowEntry }
            className={ isDragging ? styles.dragging : '' }
        >   
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}>
                {/* TODO: Cambiará dependiendo si se esta haciendo drag o no */}
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
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
