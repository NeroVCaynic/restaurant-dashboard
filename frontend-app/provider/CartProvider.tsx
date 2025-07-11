'use client';

import React, {
    useState,
    useRef, 
    useMemo, 
    useEffect, 
    useContext, 
    createContext,
} from 'react';
import { appObjectType, menuListType, cartType } from '@/types';

const ListContext = createContext<appObjectType | undefined>(undefined);

function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [productList, setList] = useState<menuListType[]>([]);
    const [ready, setReadyState] = useState<boolean>(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [refTrigger, UpdaterefTrigger] = useState<boolean>(false);
    const cart = useRef<cartType[]>([]);

    function setMenuList(menu: menuListType[]): void {
        setList(menu);
    }

    function shopToCart(itemName: string, value: number): void {
        cart.current.forEach((e)=>{
            if(e.stock != null) {
                if ((e.name == itemName) && ((e.amount+value) < e.stock)) {e.amount += value};
            }
        });

        UpdaterefTrigger(prev => !prev);
    }

    function getStock(itemName: string): menuListType[] {
        const result = productList.filter((e)=>{
            if (e.name == itemName) {return e.stock};
        });

        return result;
    }

    useMemo(()=>{
        setList([
            {name:'something something something something', stock: 10},
            {name:'something something something something B', stock: 10},
            {name:'something C', stock: 10},
            {name:'something D', stock: 10},
            {name:'something E', stock: 10},
            {name:'something F', stock: 10},
        ]);
    }, []);
    useEffect(()=>{
        cart.current = productList.map(obj => {
            return { ...obj, amount: 0 };
        });

        
        console.log(cart);
        
        setReadyState(true)
        return ()=>setReadyState(false)
    }, [productList]);

    return (
        <ListContext.Provider 
        value={
            {
                values: [productList, cart],
                functions: [setMenuList, shopToCart, getStock]
            }
        }
        >
            {ready? children : null}
        </ListContext.Provider>
    );
}

function useListContext(): appObjectType {
    const context = useContext<appObjectType | undefined>(ListContext);

    return context? context : {values:[], functions:[]};
}

export default CartProvider;
export {
    useListContext,
};