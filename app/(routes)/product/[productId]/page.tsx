import { getProductById } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { Gallery } from "@/components/gallery";
import { ProductDetails } from "@/components/store/product-details";
import { ProductList } from "@/components/store/product-list";
import { Container } from "@/components/ui/container";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

interface ProductPageProps {
    params : { productId : string  }
}

export async function generateMetadata(
    { params }: ProductPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const product = await getProductById(params.productId);
    const previousImages = (await parent).openGraph?.images || []
   
    return {
        title: `Buy ${product.name} ${product.about}`,
        description : `${product.description}`,
        openGraph: {
            images: [{
                url : product.productImages[0].url,
                height : 1200,
                width : 900
            }, ...previousImages],
            type : "website",
        },
        twitter : {
            card: 'summary_large_image',
            title: `Buy ${product.name} ${product.about}`,
            description: `${product.description}`,
            images: [{
                url : product.productImages[0].url,
                height : 1200,
                width : 900
            }], 
        },
        category : "ecommerce"
    }
}

const ProductPage = async({
    params
} : ProductPageProps) => {

    const product = await getProductById(params.productId);

    if (!product){
        redirect("/");
    }

    const suggestProducts  = (await getProducts({ 
        categoryId : product?.category?.id,
        limit : "10",
        type : product.type.toString()
    })).filter((item) => item.id !== product.id);


    return (
        <div
            className="bg-white mb-16"
        >
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div>
                            <Gallery images={product.productImages} />
                        </div>
                        <div className="mt-10 sm:mt-16 lg:mt-0 md:px-24 lg:px-0">
                            <ProductDetails data={product} />
                        </div>
                    </div>
                </div>
                <hr className="m-10" />
                <div className="flex flex-col gap-y-16 px-4 sm:px-6 lg:px-8">
                    <ProductList
                        title="Similar Products"
                        data={suggestProducts}
                    />
                </div>
            </Container>
        </div>
    )
}

export default ProductPage;