import { useLoaderData } from "react-router-dom";

export default function SingleUser() {


  const data = useLoaderData();
  //   console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(id);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const sex = e.target.gender.value;
    const sta = e.target.status.value;

    const updateUserInfo = {
      name,
      email,
      sex,
      sta,
    };

    console.log(updateUserInfo);

    fetch(`http://localhost:5000/users/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUserInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="card-body w-[500px] mx-auto">
        <h1 className="font-semibold text-2xl text-center">NEW USER</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered rounded-none"
            name="name"
            defaultValue={data.name}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered rounded-none"
            name="email"
            defaultValue={data.email}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-2 mt-5">
            <input
              type="radio"
              name="gender"
              className="radio"
              value="Male"
              defaultChecked={data.gender === "Male" && data.gender}
              
            />
            <p>Male</p>
          </div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <input
              type="radio"
              name="gender"
              className="radio"
              value="Female"
              defaultChecked={data.gender === "Female" && data.gender}
              
            />
            <p>Female</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex justify-center items-center gap-2 mt-5">
            <input
              type="radio"
              name="status"
              className="radio"
              value="Active"
              defaultChecked={data.status}
            />
            <p>Active</p>
          </div>
          <div className="flex justify-center items-center gap-2 mt-5">
            <input
              type="radio"
              name="status"
              className="radio"
              value="Inactive"
              defaultChecked={data.status}
            />
            <p>Inactive</p>
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Update</button>
        </div>
      </form>
    </div>
  );
}
