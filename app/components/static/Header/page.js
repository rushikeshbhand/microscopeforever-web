import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.jpg';

const Header = () => {
    return (
        <header className="text-gray-600 body-font sticky top-0 z-50 shadow-md bg-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" passHref>
                <Image src={logo} alt="" width={50} height={50} />
                    <span className="ml-3 text-xl">Microscopeforever</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center  text-slate-950 text-base justify-center">
                    <Link href="/components/dynamic/Notes" className="mr-5 hover:text-lime-600" passHref>Notes</Link>
                    <Link href="/components/dynamic/Blogs" className="mr-5 hover:text-lime-600" passHref>Blogs</Link>
                    <Link href="/components/dynamic/Jobs" className="mr-5 hover:text-lime-600" passHref>Jobs</Link>
                    <Link href="/components/static/About" className="mr-5 hover:text-lime-600" passHref>About</Link>
                </nav>
                <button className="inline-flex items-center text-white bg-slate-900 border-0 py-2 px-4 focus:outline-none hover:bg-lime-700 rounded text-base mt-4 md:mt-0">
                    <Link href="/components/dynamic/SignupAndLogin" passHref>Signup/login</Link>
                </button>
            </div>
        </header>
    );
};

export default Header;
