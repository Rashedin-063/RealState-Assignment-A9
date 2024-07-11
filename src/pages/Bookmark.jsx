import { getDataFromLS } from "../utility/localStorage";

const Bookmark = () => {
  const bookmarkedDataArray = getDataFromLS();
  console.log(bookmarkedDataArray)
  
  return (
    <div className="min-h-[60vh] mt-16">
      <h2 className="text-center mb-4 text-4xl bg-slate-900 w-1/2 mx-auto p-2 rounded-md">this is bookmark</h2>
      {bookmarkedDataArray.map((bookmarkedData, idx) => (
        <div key={bookmarkedData.id}>
          <div className="text-center bg-slate-700 w-3/4 mx-auto p-2 rounded-md mb-2 shadow-lg text-lg">
            <p className="text-violet-100 font-semibold"> <span className="mr-2 text-xl">{ idx+1}.</span>
              {bookmarkedData.estate_title}
              <span className="ml-4 text-yellow-300">Price: {bookmarkedData.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;