import Book from "./components/Book";
import books from './data/books.json';

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
