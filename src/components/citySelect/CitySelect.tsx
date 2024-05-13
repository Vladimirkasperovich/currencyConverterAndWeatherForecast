import React, {useState} from 'react';
import s from 'components/citySelect/CitySelect.module.css'
import arrow_down from 'assets/arrow_down_icon_184252.svg'
import arrow_up from 'assets/arrow_up_icon_184269.svg'

export const CitySelect = () => {
    //нужно пофиксить 29 строку, передать key

    const [cityName, setCityName] = useState(['Minsk', 'Kiev', 'Madrid', 'London']);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('')
    const openDrop = () => {
        setIsOpen((prevState) => !prevState)
    }
    const closeDrop = (city: string) => {
        setIsOpen(() => false)
        setSelectedCity(city)
    }

    return (
        <div className={s.select}>
            <div className={s.selectValue} onClick={openDrop}>
                <span>{selectedCity ? selectedCity : 'Выберите город'}</span>
                <img src={isOpen ? arrow_up : arrow_down} alt=""/>
            </div>
            {
                isOpen && <div className={s.content}>
                    <ul className={s.content__ul}>
                        {
                            cityName.map(city => <li className={s.list} onClick={() => closeDrop(city)}>{city}</li>)
                        }
                    </ul>
                </div>
            }

        </div>
    )
};

