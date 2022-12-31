import { stringify } from 'querystring';
import { FC, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces'
import { EntriesContext, entriesReducer } from './'

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'In progress: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Finish: Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            status: 'finished',
            createdAt: Date.now() - 100000
        }
    ],
}

interface Props {
    children: JSX.Element
}

export const EntriesProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = ( description ) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: "pending"
        }

        dispatch({ type: '[Entry] - AddEntry', payload: newEntry });

    }

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            { children }
        </EntriesContext.Provider>
    )
}