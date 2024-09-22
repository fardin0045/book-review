import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate();
    const handleListedBooks = () =>{
        navigate('/listedBooks');
    }

    return (
        <div>
            
            <div className="hero bg-base-200 p-8 rounded-xl mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="/src/components/Banner/R.png"
                        className=" w-80 rounded-lg" />
                    <div className=" space-y-3">
                        <h1 className="text-6xl font-bold pb-8">Books to freshen  up  <br />your bookshelf </h1>
                       
                        <button  onClick={handleListedBooks} className="p-4 mt-10 font-bold bg-[#23BE0A] text-white  rounded-xl">View The List  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;