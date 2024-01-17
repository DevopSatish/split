// Timeline.js

import React from 'react';
import Image from "next/image"


const Timeline = () => {
    return (
<>


        <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-4 mx-auto max-w-3xl my-6">


            <div class="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-lg mr-4">
                1
            </div>


            <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">Connect to DB</h3>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
            </div>


            <div class="md:w-1/2">
                <img class="w-full bg-cover h-auto rounded-md" src="/connect_1_1.svg" alt="Card Image"/>
            </div>

        </div>
           


        </>

           
    );
};

export default Timeline;
