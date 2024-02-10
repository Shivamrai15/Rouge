import Link from 'next/link';
import { Pacifico } from 'next/font/google';

import { Container } from '@/components/ui/container';
import { MainNav } from './main-nav';
import { getCategories } from '@/actions/get-categories';
import { NavbarActions } from './navbar-actions';
import { cn } from '@/lib/utils';
import { getWishlistItems } from '@/actions/get-whishlist';
import { MobileNavbar } from './mobile-nav';

const font = Pacifico({
    weight : ["400"],
    subsets : ["latin"]
})

export const Navbar = async() => {

    const data = await getCategories();
    const wishlistItems = await getWishlistItems();

    return (
        <header className='shadow-neutral-100 shadow-lg border-b'>
            <Container>
                <div className='px-4 relative md:px-6 lg:px-8 h-16 flex items-center'>
                    <MobileNavbar data={data}  />
                    <Link className='ml-4 flex lg:ml-0 gap-x-2'
                        href="/"
                    >
                        <li className={cn(
                            'list-none font-extrabold text-2xl',
                            font.className
                        )}>
                            Rogue
                        </li>
                    </Link>
                    <div className='hidden md:block'>
                        <MainNav data={data} />
                    </div>
                    <NavbarActions
                        wishlistItems={wishlistItems}
                    />
                </div>
            </Container>
        </header>
    );
}
