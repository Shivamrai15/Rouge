import { Metadata } from "next"

export const metadata : Metadata  = {
    title : "Orders"
}

interface OrdersLayoutPageProps {
    children : React.ReactNode
}

const OrdersLayoutPage = ({
    children
} : OrdersLayoutPageProps ) => {
    return (
        <div className="w-full min-h-full" >{children}</div>
    )
}

export default OrdersLayoutPage;