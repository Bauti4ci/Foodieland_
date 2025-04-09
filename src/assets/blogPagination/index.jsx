function BlogPagination({ pages, page, setPage }) {
    const pagesPerBlock = 5;
    const pageStart = Math.floor((page - 1) / pagesPerBlock) * pagesPerBlock;
    const visiblePages = pages.slice(pageStart, pageStart + pagesPerBlock);


    const handleNext = () => {
        if (pageStart + pagesPerBlock < pages.length) {
            setPage(pageStart + pagesPerBlock + 1);
        }
    };


    const handlePrev = () => {
        if (pageStart > 0) {
            setPage(pageStart - pagesPerBlock + 1);
        }
    };

    return (
        <div className="pageNumberSelector">
            <button className="pagebtn" onClick={handlePrev} disabled={pageStart === 0}
                style={{
                    visibility: pageStart === 0 ? 'hidden' : 'visible'
                }}
            >
                <img src="/leftArrow.svg" alt="Anterior" />
            </button>

            {visiblePages.map((num) => (
                <button
                    className="pagebtn"
                    style={{
                        backgroundColor: page === num ? 'black' : 'white',
                        color: page === num ? 'white' : 'black',
                    }}
                    key={num}
                    onClick={() => setPage(num)}
                >
                    {num}
                </button>
            ))}

            <button
                className="pagebtn"
                onClick={handleNext}
                disabled={pageStart + pagesPerBlock >= pages.length}
                style={{
                    display: pageStart + pagesPerBlock >= pages.length ? 'none' : 'block',
                }}
            >
                <img src="/rightArrow.svg" alt="Siguiente" />
            </button>
        </div>
    );
}

export default BlogPagination;
