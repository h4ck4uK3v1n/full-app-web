export interface Category {
    id: string,
    name: string,
    description: string,
}

export interface CategoriesProps {
    categories: Category[]
    status: number
}