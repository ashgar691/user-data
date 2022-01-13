export interface User {
    id: number;
    name: string;
    username: string;
    company: Company;
    phone: string;
    email: string;
    address: Address;
    website: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}