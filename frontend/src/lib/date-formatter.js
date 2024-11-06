const dateFormatter = (date) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    return new Date(date).toLocaleDateString("en-GB", options);
};

export default dateFormatter;
