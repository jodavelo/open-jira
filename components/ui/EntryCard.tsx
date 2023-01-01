import React, { DragEvent, FC, useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui'

interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setStartDragging, setEndDragging } = useContext( UIContext )

    const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        event.dataTransfer.setData('text', entry._id);

        // TODO: modificar el estado, para indicar que estoy haciendo drag
        setStartDragging();
    }

    const onDragEnd = () => {
        // TODO: cancelar un drog
        setEndDragging();
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
            // Eventos de drag
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line'}}> { entry.description } </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
                    <Typography variant='body2'>30 minutes ago</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
