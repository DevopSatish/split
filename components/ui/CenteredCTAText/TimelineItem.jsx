// TimelineItem.js

import React from 'react';

const TimelineItem = ({ title, imageSrc, content }) => {
    return (
        <div className="flex mb-8">
            <div className="flex-shrink-0 w-16">
                <img src={imageSrc} alt={title} className="rounded-full w-12 h-12 object-cover" />
            </div>
            <div className="ml-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2">{content}</p>
            </div>
        </div>
    );
};

export default TimelineItem;
