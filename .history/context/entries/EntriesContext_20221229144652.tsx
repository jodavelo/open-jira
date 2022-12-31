import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
    entries: Entry[]; // todoo: falta el tipo de dato del arreglo,
}

export const EntriesContext = createContext({} as ContextProps);