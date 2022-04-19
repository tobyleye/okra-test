import React from 'react';
import "./center.scss";

export default function Center({children}) {
    return (
        <div className='abs-center'>
            {children}
        </div>
    )
}