import React, {useState} from 'react';
import s from 'components/Burgermenu/BurgerMenu.module.css'

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleSideBar = () => {
        setOpen((prevState) => !prevState)
    }

    return <button className={s.hamburger_button} onClick={toggleSideBar}> {open ? '✖' : '☰'} </button>
};

