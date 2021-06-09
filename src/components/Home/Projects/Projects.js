import React from 'react';
import iceCreate from '../../../img/ice-cream.png'

const Projects = () => {
    return (
        <section>
            <div className="container">
                <h2 className='text-5xl my-3 font-extralight'>
                    <span className=''>Projects</span>
                </h2>
                {/* row */}
                <div className="flex flex-wrap py-5">
                    <div className="column w-full sm:w-full md:w-1/2 m-3 md:m-0  box-content lg:w-1/3">
                        <div className="overflow-hidden rounded-lg shadow-lg m-1 md:mx-1 sm:mx-1">
                            <img src={iceCreate} className="block h-auto w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div className="column w-full sm:w-full md:w-1/2 m-3 md:m-0  box-content lg:w-1/3">
                        <div className="overflow-hidden rounded-lg shadow-lg m-1 md:mx-1 sm:mx-1">
                            <img src={iceCreate} className="block h-auto w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div className="column w-full sm:w-full md:w-1/2 m-3 md:m-0  box-content lg:w-1/3">
                        <div className="overflow-hidden rounded-lg shadow-lg m-1 md:mx-1 sm:mx-1">
                            <img src={iceCreate} className="block h-auto w-full rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;