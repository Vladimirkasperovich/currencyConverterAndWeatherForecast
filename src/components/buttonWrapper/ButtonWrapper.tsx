import React from 'react';
import s from 'components/buttonWrapper/ButtonWrapper.module.css'
export type ButtonWrapper = {
    text: string
}
export const ButtonWrapper = ({text}: ButtonWrapper) => {
    return <button className={s.button}>{text}</button>
};

