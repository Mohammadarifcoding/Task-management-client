import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1300px]  mx-auto'>
            {children}
        </div>
    );
};

export default Container;