import Image from "next/image";

import Link from 'next/link';
import WineShoppingForm from './components/WineShoppingForm';

export default function Home() {
    return (
        <div>

            <Link href="/second-page" className="text-blue-500 underline hover:text-blue-700">
                second-page
            </Link>
            <WineShoppingForm />
        </div>
    );
}
