import React from 'react';
import moi21 from '../assets/moi2.png';
import '../styles/components/FirstZone.css';

const FirstZone = () => {
        return (
            <div className="root">
                <div className="rectangle10"></div>
                <p className="text developpeur">Developpeur</p>
                <p className="text devo">Devo</p>
                <img src={moi21} alt="Profile" className="moi"/>
                <p className="text photographe">Photographe</p>
            </div>
        );
    };

export default FirstZone;
