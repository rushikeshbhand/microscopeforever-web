import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <section className='bg-gradient-to-b from-lime-600 to-white-50 h-[550px] w-full'>
            <div className="container mx-auto flex flex-col items-center py-16">
                <h1 className="text-4xl font-bold mb-4 text-white">Find the Best Articles</h1>
                <p className="text-lg mb-8 text-gray-200 text-center">Search through a wide range of articles to find exactly what you need.</p>
                <div className="w-full max-w-xl">
                    <form className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search articles, tutorials, and more..."
                            className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
                        />
                        <button type="submit" className="bg-lime-600 text-white px-6 py-4 rounded-2xl hover:bg-lime-700 focus:outline-none">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            <section className="text-gray-600 body-font mb-96">
                <div className="container mx-auto flex px-5  flex-col items-center">
                    <div className="lg:max-w-2xl w-full mb-16 text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Welcome to Microscopeforever
                            <br className="hidden lg:inline-block" /> Your Hub for Biology and Pharmacy Resources
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Dive into a world of knowledge with our comprehensive notes, insightful blogs, and up-to-date job listings in the fields of biology, pharmacy, and related disciplines.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/components/dynamic/Notes" passHref>
                                <button className="inline-flex text-white bg-lime-600 border-0 py-2 px-6 focus:outline-none hover:bg-lime-700 rounded text-md md:text-lg">Explore Notes</button>
                            </Link>
                            <Link href="/components/dynamic/Blogs" passHref>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-md rounded md:text-lg">Read Blogs</button>
                            </Link>
                            <Link href="/components/dynamic/Jobs" passHref>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-md rounded md:text-lg">Find Jobs</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
