import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
           <div className=" mx-auto border-2 rounded-xl   justify-center w-72 ">
            <div className="">
            <img src={image} className="p-4 pt-10 rounded-3xl pl-14" alt={bookName} />
            </div>
            <div className="flex pl-5 gap-4 text-[#23BE0A] font-semibold pb-2">
                <h2 className=" p-1 bg-slate-100 rounded-3xl">{tags[0]}</h2>
                <h2 className="p-1 bg-slate-100 rounded-3xl">{tags[1]}</h2>
            </div>
            <h2 className="text-2xl font-bold pl-5 pb-2 " >{bookName}</h2>
            <p className="pl-5 pb-5 font-semibold">By: {author}</p>
            <hr className="font-bold" />
            <div className="flex justify-between pl-5  pb-5">
                <p className="font-semibold pt-5" >
                    {category}
                </p>
                <p className="flex pt-5 ">
                     
                    <p className="font-semibold pr-2">{rating}</p>
                    <p className=" text-2xl font-bold pr-2 text-center "> <CiStar  /></p>
                   
                </p>


            </div>
           </div>
          
        </div>
    );
};

export default Book;