import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ item, isSelected }) => {
  const { user } = useAuth();
  const handleSelectClass = (selectItem) => {
    Swal.fire({
      title: "Select the Class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Select",
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedClass = {
          name: selectItem.name,
          enrolledStudents: selectItem.enrolledStudents,
          image: selectItem.image,
          instructorName: selectItem.instructorName,
          availableSeats: selectItem.availableSeats,
          price: selectItem.price,
          email: user?.email,
        };
        axios
          .post("http://localhost:5000/selected-class", selectedClass)
          .then(({ data }) => {
            if (data.insertedId) {
              Swal.fire(
                "Selected!",
                "Your class has been selected.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div
      className={
        item?.availableSeats === 0
          ? "border-2 border-red-500 bg-[#fa00002b] card rounded-none hover:shadow-2xl shadow-xl font-semibold lg:mt-0 mt-4"
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
        {isSelected ? (
          <div className="flex justify-between items-center gap-10">
            <button
              // onClick={() => handleSelectClass(item)}
              // disabled={item?.availableSeats === 0}
              className="btn-sm bg-priColor w-1/2 mx-auto text-white disabled:bg-gray-400"
            >
              Pay
            </button>
            <button
              // onClick={() => handleSelectClass(item)}
              // disabled={item?.availableSeats === 0}
              className="btn-sm bg-red-500 w-1/2 mx-auto text-white disabled:bg-gray-400"
            >
              Delete
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleSelectClass(item)}
            disabled={item?.availableSeats === 0}
            className="btn-sm bg-priColor w-1/2 mx-auto text-white disabled:bg-gray-400"
          >
            Select the Class
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
