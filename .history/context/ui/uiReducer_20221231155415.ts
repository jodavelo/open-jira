
import { UIState } from './';

type UIActionType = 
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - Add Entry', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true
            }
        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false
            }
        case 'UI - Add Entry' :
            return {
                ...state,
                isAddingEntry: action.payload
            }
        default:
            return state;
    }

}