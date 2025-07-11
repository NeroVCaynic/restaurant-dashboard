'use client';

import React, { useState } from 'react';
import { useListContext } from '@/provider/CartProvider';
import {
    Minus,
    Plus,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge';

function ProductCard({id='', className='', title, stock=null, src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',}: {id?: string,  className?: string, title: string, stock: number | null, src?: string,}) {
    const {values, functions} = useListContext();
    const [amount, setAmount] = useState(0);

    function changeAmount(value: number): void {
        if (amount+value >= 0 && amount+value <= (stock? stock : 0)) {
            setAmount(prev => prev + value);
            functions[1](title, value);
            console.log(values[1]);
        }
    }
    
    return (
        <section
        id={id}
        className={twMerge("card bg-base-100 image-full min-w-16 max-w-96 aspect-[1.5/1.2] shadow-sm", className)}
        >
            <figure>
                <img
                src={src}
                alt="Shoes"
                />
            </figure>

            <div 
            className="absolute top-0 right-0 badge badge-dash badge-error rounded-full w-12 h-12 font-bold"
            >
                {(stock? stock : 0)}
            </div>
            
            <div className="card-body self-end border rounded-t-2xl h-1/2 max-sm:h-full sm:backdrop-blur-md">
                <div 
                className="absolute top-0 max-sm:left-0 sm:right-0 badge badge-success rounded-full w-12 font-bold"
                >
                    CA${(stock? stock : 0)}
                </div>
                <h2 className="card-title text-ellipsis max-w-full">{title}</h2>
                <div className="card-actions justify-between items-end-safe flex-1">
                    <button disabled={amount-1 < 0} onClick={()=>changeAmount(-1)} className="btn btn-primary min-w-16 aspect-square rounded-full">
                        <Minus/>
                    </button>

                    <span className='self-center flex-1 text-lg text-center font-semibold'>
                        {amount}
                    </span>

                    <button disabled={amount+1 > (stock? stock : 0)} onClick={()=>changeAmount(1)} className="btn btn-primary min-w-16 aspect-square rounded-full">
                        <Plus/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductCard;