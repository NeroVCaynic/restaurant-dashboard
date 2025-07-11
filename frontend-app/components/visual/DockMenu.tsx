"use client";

import React from 'react';
import {
    House,
    TableProperties,
    ShoppingBag,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge';

function DockMenu({id='', className='', }: {id?: string, className?: string}) {
    return (
        <section id={id} className={twMerge("dock bg-neutral text-neutral-content", className)}>
            <button>
                <House/>
                <span className="dock-label">Home</span>
            </button>

            <button className="dock-active">
                <ShoppingBag/>
                <span className="dock-label">Store</span>
            </button>

            <button>
                <TableProperties/>
                <span className="dock-label">Salelist</span>
            </button>
        </section>
    );
}

export default DockMenu;