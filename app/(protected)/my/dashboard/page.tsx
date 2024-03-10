import { Box } from "@/components/account/box";

const DashboardPage = () => {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Box img="/assets/box.png" label="Orders" href="/orders" />
            <Box img="/assets/add.png" label="Wishlist & Collections" href="/wishlist" />
            <Box img="/assets/coupon.png" label="Coupons" href="#" />
            <Box img="/assets/home.png" label="Address" href="/my/address" />
            <Box img="/assets/resume.png" label="Profile" href="/my/profile" />
        </div>
    )
}

export default DashboardPage;