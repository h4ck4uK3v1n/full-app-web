import type { Category } from "../types"

export function Category(category: Category) {
    const { description, id, name } = category
    return (
        <div className="p-8 border rounded-lg dark:border-gray-700">
            <p className="leading-loose text-gray-500 dark:text-gray-400">
                “{description}”.
            </p>

            <div className="flex items-center mt-8 -mx-2">
                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">{name}</h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{id}</span>
                </div>
            </div>
        </div>
    )
}