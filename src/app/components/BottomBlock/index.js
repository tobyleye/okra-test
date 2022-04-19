import React from 'react';
import "./bottomBlock.scss";

export default function BottomBlock({children}) {
    return (
        <div className="bottom-block">
            {children}
        </div>
    )
}