const ClassCard = ({ item }) => {
  return (
    <div
      className={
        item?.availableSeats === 0
          ? "border-2 border-red-500 bg-[#fa00002b]"
          : `card border-0 rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4`
      }
    >
      <figure>
        <img src={item?.image} alt="" className="w-full h-60 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{item?.name}</h3>
        <p>Instructor: {item?.instructorName}</p>
        <p>
          <span className="font-bold">{item?.enrolledStudents} </span> students
          are already enrolled.
        </p>
        <p>
          {item?.availableSeats === 0 ? (
            <span className="text-red-500">Seats not available right now!</span>
          ) : (
            <>
              <span className="font-bold">{item?.availableSeats} </span> seats
              are available.
            </>
          )}
        </p>
        <p>
          Price:
          <span className="font-bold"> ${item?.price}</span>
        </p>
        <button
          disabled={item?.availableSeats === 0}
          className="btn-sm bg-priColor w-1/2 mx-auto text-white disabled:bg-gray-400"
        >
          Select the Class
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
