export interface ICarItem   {
    id: number;
    title: string;
    price: number;
    year: number;
    generation: number;
    mileage: number;
    description: string;
    category: string;
    image: string;
    restyle?: boolean;
}