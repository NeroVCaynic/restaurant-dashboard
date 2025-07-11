interface appObject {
    values: any[],
    functions: any[],
}

interface menuList {
    name: string,
    stock: number | null,
}

interface cart {
    name: string,
    stock: number | null,
    amount: number    
}

export type {
    appObject as appObjectType,
    menuList as menuListType,
    cart as cartType,
}