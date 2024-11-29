import { useEffect, useState } from "react";
import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  console.log(users);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = users?.filter((user) => user._id !== id);
              setUsers(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="mt-24 mx-auto">
      <div className="w-[1000px] mx-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {users?.map((user, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => handleDelete(user?._id)}>
                    <MdDelete className="text-red-600" />
                  </button>
                  <Link to={`/users/${user._id}`}>
                    <button className="ml-5">
                      <MdOutlineSystemUpdateAlt />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
