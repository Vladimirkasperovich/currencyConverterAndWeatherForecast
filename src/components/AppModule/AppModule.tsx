import React, {useState} from 'react';
import {Header} from "components/Header/Header";
import {SideBar} from "components/sideBar/SideBar";

export const AppModule = () => {
    const [toggleSideBar, setToggleSideBar] = useState(false);
    const toggleSideBarHandler = (isOpen: boolean) => {
        setToggleSideBar(isOpen)
    }
    return (
        <section>
            <Header toggleSideBarHandler={toggleSideBarHandler}/>
            {
                toggleSideBar && <SideBar/>
            }

        </section>
    );
};

