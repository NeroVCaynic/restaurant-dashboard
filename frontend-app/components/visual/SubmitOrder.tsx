'use client';

import React from 'react';
import { useListContext } from "@/provider/CartProvider";
import { cartType } from "@/types";

function SubmitOrder() {
    const elements: cartType[] = useListContext().values[1].current;

    return (
        <>
            <button 
            id="submit"
            className="btn btn-primary p-6 w-full text-xl font-semibold"
            onClick={()=>{document.getElementById('checkout').showModal()}}
            >
                Place Order
            </button>
            <dialog id="checkout" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Checkout Confirm</h3>
                    <section className="py-4 space-y-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    elements.map(
                                        (e, idx)=> e.amount > 0 ? <tr key={idx}>
                                                <td>{e.name}</td>
                                                <td>{e.amount}</td>
                                                <td>{e.stock}</td>
                                            </tr> : undefined
                                    )
                                }
                            </tbody>
                        </table>
                        <hr />
                        <div>
                        <table className="table table-pin-rows bg-base-20 text-center">
                            <thead>
                                <tr>
                                    <th>Total</th>
                                    <th>Total+Tax</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{100}</td>
                                    <td>{(100  + (100*0.13))}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <hr />
                        <button className='w-full p-2 btn btn-secondary btn-outline'>Place Cash/Debit</button>
                        <button className='w-full p-2 btn btn-accent btn-outline'>Place Credit</button>
                    </section>
                </div>
            </dialog>
        </>
    );
}

export default SubmitOrder;