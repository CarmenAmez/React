
import Book from "./components/libro";
import books from './data/libro.json';

const App = () => {
    return (
        <div>
            {books.map((book) => (
                <Book key={book.tit} book={book} />
            ))
            }

        </div>
    );
};
export default App
