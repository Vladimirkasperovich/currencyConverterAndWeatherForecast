import React, {useState} from 'react';
import s from 'components/sideBar/SideBar.module.css'

export const SideBar = () => {
    return (
        <section className={s.section}>
            <div className={s.sideBar_block}>
                <div className={s.sideBar_content}>
                    <p>Item1</p>
                    <p>Item2</p>
                    <p>Item3</p>
                </div>
            </div>
        </section>
    );
};

