
import { getProductById } from "@/actions/get-product";
import { getWishlistItems } from "@/actions/get-whishlist";
import { Container } from "@/components/ui/container";
import { WishlistItemsList } from "./wishlist-items-list";
import { EmptyWishlist } from "./empty-wishlist";
import { auth } from "@/auth";


export const WishlistItems = async() => {

    const session = await auth();
    
    if (!session) {
        return null;
    }

    const wishlistItems = await getWishlistItems();
    const wishlistItemsProductIds = wishlistItems?.products.map((items) => items.productId) || [];

    const products = await Promise.all(
        wishlistItemsProductIds.map(async(id)=> {
            const product = await getProductById(id);
            return product;
        })
    );

    if ( products.length === 0 ){
        return (
            <EmptyWishlist/>
        )
    }

    return (
        <Container>
            <WishlistItemsList data = {products} />
        </Container>
    )
}
