import { Metadata } from "next";
import { getCategoryById } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Container } from "@/components/ui/container";
import { Filter } from "./_components/filter";
import { NoResults } from "@/components/store/no-results";
import { ProductCard } from "@/components/store/product-card";
import { MobileFilters } from "./_components/mobile-filters";
import { PaginationComponent } from "./_components/pagination";


interface CategoryPageProps {
    params : {
        categoryId : string;
    },
    searchParams  : {
        colorId : string;
        sizeId : string;
        limit : string;
        category : "MEN" | "WOMEN";
        page : string;
    }
}

export async function generateMetaData (
    { params, searchParams } : CategoryPageProps,
) : Promise<Metadata> {

    const gender = searchParams.category;
    const category = await getCategoryById(params.categoryId);

    return {
        title : `Buy ${gender[0]+gender.slice(1)} ${category.name} Online at India's best store | Rouge`,
        keywords : [
            category.name,
            category.classification.toString().toLowerCase(),
            `${gender[0]+gender.slice(1)} ${category.name}`
        ],
        description : `Explore a stylish array of ${gender.toLowerCase()}'s ${category.name} online at Rouge. Elevate your wardrobe with trendy designs, unmatched quality, and hassle-free shopping. Redefine your style effortlessly. Shop now!`
    }
}


const CategoryPage = async({
    params,
    searchParams
} : CategoryPageProps ) => {

    
    const products = await getProducts({
        type : searchParams.category,
        categoryId : params.categoryId,
        colorId : searchParams.colorId,
        sizeId : searchParams.sizeId,
        page : searchParams.page,
        limit : "12"
    });

    const category = await getCategoryById(params.categoryId);
    
    const sizes = await getSizes();
    const colors = await getColors();
    const filteredSizes = sizes.filter((size) => category.classification.toString().includes(size.name));

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 pt-5 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-14">
                        <MobileFilters
                            sizes = {filteredSizes}
                            colors = {colors}
                        />
                        <div className="hidden lg:block lg:border-r">
                            <h3 className="mb-5 text-lg font-bold">Filters</h3>
                            <Filter
                                valueKey = "sizeId"
                                name = "Sizes"
                                data = {filteredSizes}
                            />
                            <Filter
                                valueKey = "colorId"
                                name = "Colors"
                                data = {colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-4">
                            {
                                products.length === 0 && (
                                    <NoResults />
                                )
                            }
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md::gap-8 lg:gap-10">
                                {
                                    products.map((product)=>(
                                        <ProductCard
                                            key={product.id}
                                            data={product}
                                        />
                                    ))
                                }
                            </div>
                            <div className="w-full flex items-center justify-center pt-12">
                                <PaginationComponent
                                    lastPage = {products.length < 12}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;