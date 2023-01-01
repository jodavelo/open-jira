import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
    sideMenuOpen: boolean,
    isAddingEntry: boolean,
    isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

interface Props {
    children: JSX.Element
}

export const UIProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type: "UI - Set isAddingEntry", payload: isAdding })
    }

    const setStartDragging = () => {
        dispatch({type: 'UI - Set Start Dragging'});
    }

    const setEndDragging = () => {
        dispatch({ type: 'UI - Set End Dragging' });
    }

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            openSideMenu,
            closeSideMenu,
            
            setIsAddingEntry,

            setStartDragging,
            setEndDragging
        }}>
            { children }
        </UIContext.Provider>
    )
}