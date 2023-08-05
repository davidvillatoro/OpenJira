'use client'
import { FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState extends PropsWithChildren {
    sidemenuOpen: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}


export const UIProvider:FC<UIState> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );


    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            closeSideMenu,
            openSideMenu,
        }}>
            { children }
        </UIContext.Provider>
    )
};