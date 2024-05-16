import React, {useState} from 'react';
import s from 'components/Burgermenu/BurgerMenu.module.css'
export type BurgerMenu = {
    toggleSideBarHandler: (isOpen: boolean) => void
}
export const BurgerMenu = ({toggleSideBarHandler}:BurgerMenu) => {
    const [open, setOpen] = useState(false);


    const toggleSideBar = () => {
        const newValue = !open
        setOpen(newValue);
        toggleSideBarHandler(newValue);

    }
    console.log(open)
    return <button className={open ? s.openHamburger_button : s.closeHamburger_button} onClick={toggleSideBar}> {open ? '✖' : '☰'} </button>
};

