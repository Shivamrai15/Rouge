import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rogue | Online Shopping for Women, Men Fashion & Lifestyle",
    keywords : [
                    "Online fashion store India",
                    "Trendy clothing for men and women",
                    "Fashionable footwear online",
                    "Best online fashion deals",
                    "Stylish lifestyle products",
                    "Easy returns and exchanges fashion",
                    "India's top fashion destination",
                    "Men's and women's fashion online",
                    "Latest fashion trends India",
                    "Online shopping for clothing and footwear"
                ],
    description: "Online Shopping Site for Fashion & Lifestyle in India. Elevate your style with our diverse collection of footwear and clothing for men and women. Enjoy easy returns and exchanges for a seamless online shopping experience.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    return (
        <html lang="en">
            <link rel="icon" href="/assets/icon.ico" sizes="any" />
            <body className={inter.className}>
                <SessionProvider
                    session={session}
                >
                    <ModalProvider/>
                    <Toaster position="bottom-right" />
                    <Navbar />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
