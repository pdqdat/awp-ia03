/* eslint-disable react/prop-types */

import React from "react";

import { useLocation } from "react-router-dom";

import { appName } from "@lib/const";

/**
 * PageTitle component sets the document's title based on the provided title prop.
 * It updates the document title whenever the location or title changes.
 *
 * @param {Object} props - The props object.
 * @param {string} props.title - The title to set for the document.
 *
 * @returns {null} This component does not render any visible output.
 */
const PageTitle = ({ title }) => {
    const location = useLocation();

    // Change the document title whenever the location or title changes
    React.useEffect(() => {
        document.title =
            location.pathname === "/" ? title : `${title} | ${appName}`;
    }, [location, title]);

    return null;
};

export default PageTitle;
