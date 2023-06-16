import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;