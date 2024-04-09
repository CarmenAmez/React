const Book = ({ book }) =>{
    return(
        <div>
            <h1>{book.title}</h1>
            <h3>Autor: {book.author}.</h3>
            <h3>Año: {book.year}.</h3>
        </div>
    )
};
export default Book;