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
        <div className="h-full">
            { children }
        </div>
    )
}

export default CartLayout;