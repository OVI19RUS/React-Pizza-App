import React from 'react';
import ContentLoader from "react-content-loader";

function Placeholder() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="130" cy="120" r="120" />
            <rect x="0" y="260" rx="3" ry="3" width="280" height="33" />
            <rect x="0" y="305" rx="6" ry="6" width="280" height="90" />
            <rect x="130" y="410" rx="20" ry="20" width="150" height="40" />
            <rect x="0" y="410" rx="6" ry="6" width="95" height="30" />
        </ContentLoader>
    )
}

export default Placeholder
