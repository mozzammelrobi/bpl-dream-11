import React from 'react';
import { CiFlag1 } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import Players from '../Players/Players';
import Card from '../UI/Card';

const AvailablePlayers = ({ players }) => {
    return (
        <div className='container mx-auto '>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>

                {
                    players.map(player => {
                        // console.log(player)
                        return (
                            <Card player={player}></Card>
                        )

                    })
                }

            </div>

        </div>
    );
};

export default AvailablePlayers;