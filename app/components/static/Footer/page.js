import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.jpg';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-80">
            <div className="container px-5 py-24 mx-auto flex xl:gap-96 md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" passHref>

                    <Image src={logo} alt="" width={50} height={50} />
                        <span className="ml-3 text-xl">Microscopeforever</span>

                    </Link>
                    <p className="mt-2 text-sm text-gray-500">Discovering the Hidden Details of Life</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-lime-600 tracking-widest text-sm mb-3">CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/components/dynamic/Notes" className="text-gray-600 hover:text-gray-800" passHref>
                                Notes
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/dynamic/Blogs" className="text-gray-600 hover:text-gray-800" passHref>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/dynamic/Jobs" className="text-gray-600 hover:text-gray-800" passHref>
                                    Jobs
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-lime-600 tracking-widest text-sm mb-3">CUSTOMER SERVICES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/components/static/About" className="text-gray-600 hover:text-gray-800" passHref>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/static/ContactUs" className="text-gray-600 hover:text-gray-800" passHref>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/static/OurTeam" className="text-gray-600 hover:text-gray-800" passHref>
                                    Our Team
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-lime-600 tracking-widest text-sm mb-3">SERVICES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/first" className="text-gray-600 hover:text-gray-800" passHref>
                                    Biology Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/second" className="text-gray-600 hover:text-gray-800" passHref>
                                    Web Development Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/third" className="text-gray-600 hover:text-gray-800" passHref>
                                    Web Development Soutions
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-lime-600">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 Microscopeforever.com — All Rights Reserved
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link href="https://www.facebook.com" className="text-white" passHref>

                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.twitter.com" className="ml-3 text-white" passHref>

                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>

                        </Link>
                        <Link href="https://www.instagram.com/microscopeforever?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="ml-3 text-white" passHref>

                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ravindra-bhand-02511a238/" className="ml-3 text-white" passHref>

                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
