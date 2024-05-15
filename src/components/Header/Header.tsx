import React from 'react';
import s from 'components/Header/Header.module.css'
import github from 'assets/github.svg'
import instagram from 'assets/instagram.svg'
import linkedin from 'assets/linkedin.svg'
import {Link} from "react-router-dom";
import {BurgerMenu} from "components/Burgermenu/BurgerMenu";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.burger}>
                   <BurgerMenu/>
                </div>
                <div className={s.content}>
                    <div>
                        <Link to={'https://github.com/Vladimirkasperovich?tab=repositories'}>
                            <img className={s.github_img} src={github} alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://www.linkedin.com/in/vladimir-kasperovich-38b157243/'}>
                            <img className={s.linkedin_img} src={linkedin}/>
                        </Link>
                    </div>
                    <div>
                        <Link to={'https://www.instagram.com/vova_kasper/'}>
                            <img className={s.instagram_img} src={instagram}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

