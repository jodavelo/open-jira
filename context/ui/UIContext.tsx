import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    isAddingEntry: boolean;
    setIsAddingEntry: ( payload: boolean ) => void;
    isDragging: boolean;
    setStartDragging: () => void; 
    setEndDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);