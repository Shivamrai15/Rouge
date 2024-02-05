import { Category } from '@/types'
import { NoResults } from './no-results'
import { CategoryCard } from './category-card'

interface CategoryListProps {
    categories : Category[]
}

export const CategoryList = ({
    categories
} : CategoryListProps) => {


    return (
        <div className='space-y-6 md:space-y-16'>
            <h3 className="text-3xl font-bold">Shop by category</h3>
            {
                categories.length === 0 && (
                    <NoResults />
                )
            }
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8'>
                {
                    categories.map((category)=>(
                        <CategoryCard key={category.id} data={category} />
                    ))
                }
            </div>
        </div>
    )
}
