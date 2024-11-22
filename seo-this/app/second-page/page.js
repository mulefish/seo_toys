import Link from 'next/link';

export default function SecondPage() {
    return (
        <div>
            <h1>Second Page</h1>
            <p>Welcome to the second page!</p>
            <Link href="/">
                Go back to Home Page
            </Link>
        </div>
    );
}
