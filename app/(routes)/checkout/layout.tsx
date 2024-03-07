import { CartBreadcrumb } from "@/components/cart/cart-breacrumb";

interface CheckoutLayoutPage {
    children : React.ReactNode;
}

const CheckoutLayoutPage = ({
    children
} : CheckoutLayoutPage ) => {
    return (
        <main className="min-h-full">
            <CartBreadcrumb />
            {children}
        </main>
    )
}

export default CheckoutLayoutPage