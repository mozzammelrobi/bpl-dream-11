import React, { use } from 'react';
import Player from './Player';



const Players = ({ playersPromise }) => {
    const playersData =  use(playersPromise)
    const plaers = playersData.data
    console.log(plaers)

    return (
        <div>
            <div className='flex justify-between mt-24 mb-9'>
                <h3 className='text-3xl font-bold'>Available Players: {plaers.length}</h3>
                <div>
                    <button className='btn bg-[#FEE502] text-[#181600] border-[#f1d800]'>Available</button>
                    <button>Selected</button>
                </div>
            </div>

            {/* players contaienr */}
            <div>
                {/* {
                    plaers.map(player => <Player player={player}></Player> )
                } */}
            </div>

        </div>
    );
};

export default Players;