function BlogPagination({ pages, page, setPage }) {
    // Determinamos el rango de 5 páginas a mostrar
    const pageStart = Math.floor((page - 1) / 5) * 5;
    const visiblePages = pages.slice(pageStart, pageStart + 5);

    // Función para ir a la página anterior
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Función para ir a la página siguiente
    const handleNext = () => {
        if (page < pages.length) {
            setPage(page + 1);
        }
    };

    return (
        <div className="pageNumberSelector">
            <button
                className="pagebtn"
                onClick={handlePrev}
                disabled={page === 1}
            >
                Anterior
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
                disabled={page === pages.length}
            >
                Siguiente
            </button>
        </div>
    );
}

export default BlogPagination;
