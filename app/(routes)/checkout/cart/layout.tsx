import { Metadata } from "next";

interface CartLayoutProps {
    children : React.ReactNode
}

export const metadata : Metadata = {
    title : "Shopping Bag"
}


const CartLayout = ({
    children
} : CartLayoutProps) => {
    return (
        <div>
            { children }
        </div>
    )
}

export default CartLayout;