import React from 'react';
import s from 'components/sideBar/SideBar.module.css'
import {Link} from "react-router-dom";

export const SideBar = () => {
    return (
        <section className={s.section}>
            <div className={s.sideBar_block}>
                <div className={s.sideBar_content}>
                    <Link to={''}>Погода</Link>
                    <Link to={''} className={s.second_link}>Валюты</Link>
                </div>
            </div>
        </section>
    );
};

