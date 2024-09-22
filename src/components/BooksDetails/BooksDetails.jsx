import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
  const books = useLoaderData(); // Fetch data from the loader
  const { id } = useParams(); // Get the book id from the URL
  console.log('books id',id);
  console.log('books ',books);


  // Convert id to a number before comparing
  const book = books.find(book => book.id === parseInt(id));

  // Handle case where the book is not found
  if (!book) {
    return <p>Book not found.</p>;
  }

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
console.log(bookId);
  return (
    <div>
     <div className="flex w-full mt-10 ">
        <div className=" w-1/2">
            <img src={image} alt=""  className="w-full rounded-xl pl-"/>
        </div>
        <div className="w-1/2 pl-10 space-y-3">
             <h2 className="text-4xl font-bold">{bookName} </h2> 
             <p className="font-semibold">By: {author}</p>
             <hr />
             <p className="font-medium">{category}</p>
             <hr  />
             <p> <span className="font-bold">Review:</span> {review}</p>
             <div className="flex gap-5">
                <p className="font-bold p-1">Tag</p>
                <p className=" p-1 bg-slate-100 rounded-3xl text-[#23BE0A] font-medium ">#{tags[0]}</p>
                <p className=" p-1 bg-slate-100 rounded-3xl text-[#23BE0A] font-medium">#{tags[1]}</p>
             </div>
             <hr />
             <div className="w-2/3 space-y-2">
             <p className="flex justify-between"> Number Of Pages:  <span className="font-bold">{totalPages}</span> </p>
             <p className="flex justify-between  ">Publisher: <span className="font-bold">{publisher}</span> </p>
             <p className="flex justify-between "> Year of Publishing :<span className="font-bold">{yearOfPublishing}</span> </p>
             <p className="flex justify-between" >Rating: <span className="font-bold">{rating}</span> </p>
             </div>
             <hr />
             <div className="w-1/4 flex gap-5 pt-5">
                <button className="bg-slate-200 text-black font-bold px-4 py-2  rounded-xl hover:bg-[#23BE0A]">Read </button>
                <button className="bg-[#50B1C9] text-white font-bold px-4 py-2  rounded-xl hover:bg-violet-300">Wishlist </button>
             </div>

        </div>
     </div>
    </div>
  );
};

export default BooksDetails;
