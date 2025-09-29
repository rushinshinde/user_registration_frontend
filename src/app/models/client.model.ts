export interface Address {
    addressLine1: string;
    town?: string;
    city?: string;
    pinCode?: string;
    }
    
    
    export interface Client {
    id?: string;
    title?: 'Mr'|'Mrs'|'Ms';
    firstName: string;
    lastName: string;
    gender?: 'Male'|'Female'|'Other';
    dob?: string; // ISO date
    addresses?: Address[];
    }
    
    
    export interface ClientQuery {
    page?: number;
    pageSize?: number;
    name?: string;
    gender?: string;
    dobFrom?: string;
    dobTo?: string;
    }
    
    
    export interface PagedResult<T> {
    items: T[];
    total: number;
    }