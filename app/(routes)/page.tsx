import { getCategories } from "@/actions/get-categories";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/store/billboard";
import { CategoryList } from "@/components/store/category-list";
import { Hero } from "@/components/store/hero";
import { ProductList } from "@/components/store/product-list";
import { Container } from "@/components/ui/container";


export const revalidate = 0;

const LandingPage = async() => {

    const products = await getProducts({isFeatured : true});
    const categories = await getCategories();

    const formattedCategories = categories.filter((category) => category.type.toString() === "UNISEX")

    return (
        <>
            <Billboard />
            <Container>
                <div className="space-y-10 pb-20 mt-20">
                    <div className="flex flex-col gap-y-16 md:gap-y-24 px-4 sm:px-6 lg:px-8">
                        <CategoryList categories = {formattedCategories} />
                        <Hero/>
                        <ProductList title = "Hot Deals Products" data = {products} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default LandingPage;