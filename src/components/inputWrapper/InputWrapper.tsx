import React, {ChangeEvent, useState} from 'react';
import s from 'components/inputWrapper/InputWrapper.module.css'
export type InputWrapper = {
    placeholder: string
}
export const InputWrapper = ({placeholder}: InputWrapper) => {
    const [value, setValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <input onChange={handleChange}
                  value={value}
                  placeholder={placeholder}
                  className={s.input}
    />
};

