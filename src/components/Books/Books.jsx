import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const navigate = useNavigate();
    

    const [books, setBooks] = useState([]);
    const [booksLength, setBooksLength] = useState(6);

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    const cardHandle = (id) =>{
        navigate(`/booksDetails/${id}`);
    }


    return (
        <div>
          <h2 className="text-3xl font font-extrabold text-center my-14">Books </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.slice(0, booksLength).map((book) => (
              <div key={book.id} onClick={() => cardHandle(book.id)}>
                <Book book={book} />
              </div>
            ))}
          </div>
          <div className={booksLength === books.length ? 'hidden' : ''}>
            <button
              className="bg-[#23BE0A] px-3 py-2 text-white font-bold rounded-lg ml-10 mt-10"
              onClick={() => setBooksLength(books.length)}
            >
              Show More...
            </button>
          </div>
        </div>
      );
    };
    
    export default Books;