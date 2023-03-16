import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='py-10 bg-zinc-900 h-screen px-4'>
            {children}
        </div>
    );
};

export default Layout;