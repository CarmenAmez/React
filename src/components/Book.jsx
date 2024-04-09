const Book = ({ book }) =>{
    return(
        <div>
            <h1>Título: </h1>{book.title} <br />
            <h2>Autor: </h2>{book.author}
        </div>
    )
};
export default Book;