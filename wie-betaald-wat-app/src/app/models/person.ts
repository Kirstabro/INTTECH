export interface Person {
    id: number,
    name: string,
    value : number,
    item: string;
}

export interface Payment {
    payer: string,
    value: number,
    receiver: string;
}

export interface Debt {
    name: string,
    value: number;
}

export interface Transaction {
    name: string,
    value : number,
}
