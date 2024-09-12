export interface ICategory {
    title: string;
    rus: string;
    image: string;
}

export interface ICategoryState {
    category: ICategory[];
    isLoading: boolean;
    error: string;
    activeCategory: number;
}