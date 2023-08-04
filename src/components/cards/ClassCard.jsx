import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAdmin from "./../../hooks/useAdmin";
import useInstructor from "./../../hooks/useInstructor";
import { useNavigate } from "react-router-dom";

const ClassCard = ({
  item,
  isSelected,
  refetch,
  setSelectedItemToPay,
  index,
}) => {
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
          .post(
            "https://rhymove-server.vercel.app/selected-class",
            selectedClass
          )
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
          .delete(
            `https://rhymove-server.vercel.app/selected-class/${item._id}`
          )
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
      data-aos="fade-up"
      data-aos-duration={`${index % 2 === 0 ? "1400" : "500"}`}
      className="mt-4 font-semibold bg-white border-0 rounded-none shadow-md card lg:mt-0"
    >
      <figure>
        <img src={item?.image} alt="" className="object-cover w-full h-60" />
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
          <div className="flex items-center justify-between gap-10">
            {item?.status === "paid" ? (
              <>
                <label className="w-1/2 pt-1 mx-auto text-center text-white bg-gray-500 btn-sm">
                  Paid
                </label>
              </>
            ) : (
              <label
                htmlFor="payModal"
                onClick={() => setSelectedItemToPay({ item, refetch })}
                className="w-1/2 pt-1 mx-auto text-center text-white cursor-pointer btn-sm bg-priColor"
              >
                Pay
              </label>
            )}
            <button
              onClick={() => handleDelete(item)}
              className="w-1/2 mx-auto text-white bg-red-500 btn-sm"
            >
              Delete
            </button>
          </div>
        )}
        {!isAdmin && !isInstructor && !isSelected && (
          <button
            onClick={() => handleSelectClass(item)}
            disabled={item?.availableSeats === 0}
            className="w-1/2 mx-auto text-white btn-sm bg-priColor hover:bg-secColor disabled:opacity-40 disabled:shadow-none"
          >
            Select the Class
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassCard;
