import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, coin, setCoin }) => {
    const players = use(playersPromise)
    // console.log(players)

    const [selectedType, setSelectedType] = useState('available')
    // console.log(selectedType)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between mt-24 mb-9'>
                {selectedType === 'available' ? <h3 className='text-3xl font-bold'>Available Players </h3>
                    : <h3 className='text-3xl font-bold'>Selected Players  </h3>
                }
                <div>
                    <button
                        onClick={() => setSelectedType('available')}
                        className={`btn ${selectedType === 'available' ? ' bg-[#FEE502]' : ''} text-[#181600] rounded-r-none rounded-l-xl`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setSelectedType('selected')}
                        className={`btn ${selectedType === 'selected' ? 'bg-[#FEE502]' : ''} rounded-l-none rounded-r-xl`}
                    >
                        Selected (0)
                    </button>
                </div>
            </div>

            {selectedType === 'available'
                ? <AvailablePlayers
                    key={players.id}
                    players={players}
                    coin={coin}
                    setCoin={setCoin}
                />
                : <SelectedPlayers />
            }

        </div>
    );
};

export default Players;