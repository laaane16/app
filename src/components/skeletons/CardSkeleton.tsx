import React from "react";

import ContentLoader from "react-content-loader";

const CardSkeleton: React.FC = (props) => (
    <div style={{border:'1px solid #ecebeb', padding:'67px 40px 65px 40px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <ContentLoader 
            speed={2}
            width={410}
            height={480}
            viewBox="0 0 410 490"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="135" y="3" rx="19" ry="19" width="145" height="220" /> 
            <rect x="8" y="307" rx="15" ry="15" width="398" height="33" /> 
            <rect x="351" y="270" rx="0" ry="0" width="33" height="1" /> 
            <rect x="130" y="460" rx="14" ry="14" width="140" height="25" />
        </ContentLoader>
    </div>

)

export default CardSkeleton

