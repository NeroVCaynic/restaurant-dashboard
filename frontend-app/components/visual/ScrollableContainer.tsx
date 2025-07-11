'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

function ScrollableContainer({id='', className='', children,}: {id?: string,  className?: string, children?: React.ReactNode,}) {
    return (
        <section
        id={id}
        className={twMerge("", className)}
        >
            {children}
        </section>
    );
}

export default ScrollableContainer;