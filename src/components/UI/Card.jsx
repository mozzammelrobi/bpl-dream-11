import React from 'react';
import { CiFlag1 } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
         <div className="card bg-base-100  shadow-sm">
                                    <figure>
                                        <img
                                            src={player.playerImg}
                                            alt="Shoes"
                                            className='h-[376px] w-full ' />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            <FaUser></FaUser>
                                            {player.playerName} </h2>
                                        <div className='flex justify-between items-center'>
        
                                            <p className='flex  items-center'> <CiFlag1 className='mr-1' />  Bangladesh</p>
        
                                            <button className='btn '>Alrounder</button>
                                        </div>
                                        <div className="divider"></div>
        
                                        <h2 className='font-bold '>Rating</h2>
                                        <div className='flex justify-between font-bold '>
                                            <p>{player.batStyle} </p>
                                            <p className='flex-1 text-right'>{player.bowlingStyle}</p>
                                        </div>
        
        
                                        <div className="card-actions justify-between items-center">
                                            <p className='font-semibold'>price: {player.price}</p>
                                            <button className="btn ">Chose player</button>
                                        </div>
                                    </div>
                                </div>
    );
};

export default Card;