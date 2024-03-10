import { Sidebar } from "@/components/account/sidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

interface AccountLayoutProps {
    children : React.ReactNode;
}

export const metadata : Metadata = {
    title : "My Account"
}

const AccountLayout = ({
    children
} : AccountLayoutProps ) => {
    return (
        <div className="flex w-full justify-center min-h-full">
            <div className="w-full max-w-4xl p-4 mt-10">
                <h2 className="font-bold text-zinc-800 text-lg" >Account</h2>
                <Separator/>
                <div className="grid md:grid-cols-5">
                    <aside className="hidden md:block border-r py-8">
                        <Sidebar />
                    </aside>
                    <div className="w-full md:col-span-4 py-4 md:p-8" >
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountLayout;