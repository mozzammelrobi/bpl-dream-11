import React from 'react';

const Player = ({ player }) => {
    return (
        <div>
            <img src={player.playerImg} alt="" />

        </div>
    );
};

export default Player;