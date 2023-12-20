import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1500px] bg-[#292731] mx-auto'>
            {children}
        </div>
    );
};

export default Container;