import React from 'react';
import Navbar from '../Navbar/Navbar';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Projects/>
            <Blog/>
        </div>
    );
};

export default Home;