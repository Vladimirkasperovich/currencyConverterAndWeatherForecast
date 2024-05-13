import React from 'react';
import './App.css';
import {InputWrapper} from "components/inputWrapper/InputWrapper";
import {ButtonWrapper} from "components/buttonWrapper/ButtonWrapper";
import {CitySelect} from "components/citySelect/CitySelect";
import {Header} from "components/Header/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <h1>Hui</h1>
            <InputWrapper placeholder='here will be something'/>
            <hr/>
            <ButtonWrapper text='Send'/>
            <hr/>
            <CitySelect/>
        </div>
    );
}

export default App;
