import React from "react";
import "./Avisos.css";

export const Avisos = ({ flag, type }) => {
    return (
        <>
            {type === 'error' && <p className='mensaje'>⛔ {flag && flag}</p>}
            {type === 'success' && <p className='mensaje'>🥳 {flag && flag}</p>}
            {type === 'warning' && <p className='mensaje'>⚠️ {flag && flag}</p>}
        </>
    );
};