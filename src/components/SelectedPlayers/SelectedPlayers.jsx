import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }) => {
    // console.log(selectedPlayer,"selectedPlayer")


    const handleSelectPlayer = (player) => {
        // console.log(player)
        const filterPlayers = selectedPlayer.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName)
        // console.log(filterPlayers, "filterPlayers")
        setSelectedPlayer(filterPlayers)
        setCoin(coin + player.price)


    }

    return (
        <div className='space-y-4'>
            {
                selectedPlayer.map((player, ind) => {
                    return <div key={ind} className='flex justify-between border border-green-400 rounded-2xl p-4'>
                        <div className='flex items-center gap-10'>
                            <img src={player.playerImg} alt="" className='w-[80px] rounded-2xl' />
                            <div>
                                <p>  {player.playerName}</p>
                                <p>  {player.playerType}</p>
                            </div>

                        </div>
                        <button onClick={() => handleSelectPlayer(player)} className='btn text-red-700'><MdDelete /> </button>

                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;