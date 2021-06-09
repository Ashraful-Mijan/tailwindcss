import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <section>
            <div className="container">
                <h2 className='text-5xl my-3 font-extralight'>
                    <span className=''>Blogs</span>
                </h2>
                <div className="flex flex-wrap ">
                    <div className="w-full m-3 md:m-0  md:w-1/2 lg:my-4 sm:px-2 lg:px-4 lg:w-1/3">
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <a href="/">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="/">
                                        Article Title
                                    </a>
                                </h1>
                                <p class="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm">
                                        Author Name
                                    </p>
                                </a>
                                <a class="no-underline text-grey-darker hover:text-red-dark" href="/">
                                    <span class="hidden">Like</span>
                                    <i class="fa fa-heart"></i>
                                </a>
                            </footer>

                        </article>
                    </div>
                    <div className="w-full m-3 md:m-0 md:w-1/2 lg:my-4 sm:px-2 lg:px-4 lg:w-1/3">
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <a href="/">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="/">
                                        Article Title
                                    </a>
                                </h1>
                                <p class="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm">
                                        Author Name
                                    </p>
                                </a>
                                <a class="no-underline text-grey-darker hover:text-red-dark" href="/">
                                    <span class="hidden">Like</span>
                                    <i class="fa fa-heart"></i>
                                </a>
                            </footer>

                        </article>
                    </div>
                    <div className="w-full m-3 md:m-0 md:w-1/2 lg:my-4 sm:px-2 lg:px-4 lg:w-1/3">
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <a href="/">
                                <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black" href="/">
                                        Article Title
                                    </a>
                                </h1>
                                <p class="text-grey-darker text-sm">
                                    11/1/19
                                </p>
                            </header>

                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="/">
                                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                    <p class="ml-2 text-sm">
                                        Author Name
                                    </p>
                                </a>
                                <a class="no-underline text-grey-darker hover:text-red-dark" href="/">
                                    <span class="hidden">Like</span>
                                    <i class="fa fa-heart"></i>
                                </a>
                            </footer>

                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;