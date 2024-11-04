/* eslint-disable react/prop-types */

import reactSvg from "@/assets/react.svg";

const PageLogo = ({ big = false, className = "" }) => {
    const size = big ? "h-14" : "h-10";

    return (
        <img
            alt="React logo"
            src={reactSvg}
            className={`w-auto animate-spin-slow ${size} ${className}`}
        />
    );
};

export default PageLogo;
