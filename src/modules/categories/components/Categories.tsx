import React from 'react'
import { CategoriesProps } from '../types'
import { Category } from './Category'

export function Categories(props: CategoriesProps) {

    const { categories, status } = props

    if (status !== 200) {
        return (
            <div>Something went wrong</div>
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    {categories.map(({ description, id, name }) => (
                        <Category key={id} name={name} description={description} id={id} />
                    ))}
                </section>
            </div>
        </section>
    )
}

