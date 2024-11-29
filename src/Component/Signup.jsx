import { Link } from "react-router-dom";

export default function Signup() {
  const handleNewUser = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const user = {
      name,
      email,
      gender,
      status,
    };

    // console.log(name, email, gender, status);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        
        <div className="hero-content flex-col lg:flex-row-reverse  w-[800px]">
          <div className="bg-base-100 w-[800px]">
            
          <Link to="/allusers"> <button className="text-orange-400 italic font-extrabold mt-10 ml-7 px-5">All User</button> </Link>

            <form onSubmit={handleNewUser} className="card-body">
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
                />
              </div>

              <div className="flex gap-4">
                <div className="flex justify-center items-center gap-2 mt-5">
                  <input
                    type="radio"
                    name="gender"
                    className="radio"
                    value="Male"
                  />
                  <p>Male</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-5">
                  <input
                    type="radio"
                    name="gender"
                    className="radio"
                    value="Female"
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
                    value="active"
                  />
                  <p>Active</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-5">
                  <input
                    type="radio"
                    name="status"
                    className="radio"
                    value="inactive"
                  />
                  <p>Inactive</p>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">
                  ADD USER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
