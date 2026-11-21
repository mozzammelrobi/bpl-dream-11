import React from 'react';
import Card from '../UI/Card';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayer, setSelectedPlayer }) => {
    // console.log(coin)
    return (
        <div className='container mx-auto '>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>

                {
                    players.map(player => {
                        // console.log(player)
                        return (
                            <Card
                            key={player.id}
                                player={player}
                                coin={coin}
                                setCoin={setCoin}
                                selectedPlayer={selectedPlayer}
                                setSelectedPlayer={setSelectedPlayer}
                            ></Card>
                        )

                    })
                }

            </div>

        </div>
    );
};

export default AvailablePlayers;