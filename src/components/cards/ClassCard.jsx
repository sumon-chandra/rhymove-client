import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAdmin from "./../../hooks/useAdmin";
import useInstructor from "./../../hooks/useInstructor";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ item, isSelected, refetch, setSelectedItemToPay }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const handleSelectClass = (selectItem) => {
    if (!user) {
      return navigate("/login");
    }
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
          selectedClassId: selectItem._id,
          enrolledStudents: selectItem.enrolledStudents,
          image: selectItem.image,
          instructorName: selectItem.instructorName,
          instructorEmail: selectItem.instructorEmail,
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

  // !!!!!!!!!!!!!! When student selected a class then Delete and Pay buttons will be executed.
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA500",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/selected-class/${item._id}`)
          .then(({ data }) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
              refetch();
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
        {isSelected && (
          <div className="flex justify-between items-center gap-10">
            {item?.status === "paid" ? (
              <>
                <label className="btn-sm pt-1 text-center bg-gray-500 w-1/2 mx-auto text-white">
                  Paid
                </label>
              </>
            ) : (
              <label
                htmlFor="payModal"
                onClick={() => setSelectedItemToPay({ item, refetch })}
                className="btn-sm cursor-pointer pt-1 text-center bg-priColor w-1/2 mx-auto text-white"
              >
                Pay
              </label>
            )}
            <button
              onClick={() => handleDelete(item)}
              className="btn-sm bg-red-500 w-1/2 mx-auto text-white"
            >
              Delete
            </button>
          </div>
        )}
        {!isAdmin && !isInstructor && !isSelected && (
          <button
            onClick={() => handleSelectClass(item)}
            disabled={item?.availableSeats === 0}
            className="btn-sm bg-priColor hover:bg-secColor w-1/2 mx-auto hover:shadow-xl disabled:opacity-40 disabled:shadow-none"
          >
            Select the Class
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
