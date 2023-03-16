import React from 'react';
import {BsCheck} from "react-icons/bs";

const Check = ({isCompleted}) => {
    return (
        <div className={`shrink-0 border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 ${isCompleted ? 'bg-pink-400' : null} flex items-center justify-center`}>
            {isCompleted &&
                <BsCheck size={24} className='text-gray-900 '/>
            }
        </div>
    );
};

export default Check;