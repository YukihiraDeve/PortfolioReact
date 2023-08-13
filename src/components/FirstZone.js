import React, { useState, useEffect } from 'react';
import moi21 from '../assets/moi2.png';
import '../styles/components/FirstZone.css';


const FirstZone = () => {
    const [position, setPosition] = useState(0);
    const positions = [
        { className: "text developpeur", left: "0%", zIndex: 0 },
        { className: "text photographe", left: "50%", transform: "translateX(-50%)", zIndex: 2 },
        { className: "text devo", left: "50%", zIndex: 0 },
    ];
    
    const rotatePositions = () => {
        setPosition((position + 1) % 3);
    }

    // Ajouter un effet pour démarrer l'animation automatique
    useEffect(() => {
        const intervalId = setInterval(rotatePositions, 3000); // Changer la position toutes les 3 secondes
        return () => clearInterval(intervalId);  // Nettoyer l'effet secondaire lorsque le composant est démonté
    }, [position]);

    return (
        <div className="root">
            <div className="rectangle10"></div>

            <p 
                className={positions[position].className}
                style={{left: positions[position].left, transform: positions[position].transform, zIndex: positions[position].zIndex}}
            >
                Developpeur
            </p>

            <p 
                className={positions[(position + 1) % 3].className}
                style={{left: positions[(position + 1) % 3].left, transform: positions[(position + 1) % 3].transform, zIndex: positions[(position + 1) % 3].zIndex}}
            >
                Photographe
            </p>

            <p 
                className={positions[(position + 2) % 3].className}
                style={{left: positions[(position + 2) % 3].left, transform: positions[(position + 2) % 3].transform, zIndex: positions[(position + 2) % 3].zIndex}}
            >
                DevOPS
            </p>

            <img src={moi21} alt="Profile" className="moi" />
        </div>
    );
};

export default FirstZone;
