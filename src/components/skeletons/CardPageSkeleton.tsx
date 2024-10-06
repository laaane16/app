import React from "react"
import ContentLoader from "react-content-loader"

const CardPageSkeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={1492}
    height={640}
    viewBox="0 0 100% 100%"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="642" height="100%" /> 
    <rect x="840" y="85" rx="5" ry="5" width="440" height="48" /> 
    <rect x="840" y="165" rx="5" ry="5" width="200" height="24" /> 
    <rect x="840" y="225" rx="5" ry="5" width="84" height="21" /> 
    <rect x="840" y="320" rx="5" ry="5" width="387" height="50" /> 

  </ContentLoader>
)

export default CardPageSkeleton