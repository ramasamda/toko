import { useState, useEffect } from "react";
import { getUser, create } from "../fetch/user";
import { Navigate, useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
    price: "",
    stock: "",
    image: "",
    userId: "",
  });

  const navigate = useNavigate()

  const submitHandler = () => {
    create(form);
    alert("data berhasil dibuat");
    navigate('/profile')
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <div className="form-grouple"></div>
      <input
        type="text"
        name="id"
        value={form.id}
        placeholder="ID"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="type"
        value={form.type}
        placeholder="type"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="price"
        value={form.price}
        placeholder="price"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="stock"
        value={form.stock}
        placeholder="stock"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="image"
        value={form.image}
        placeholder="image"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="userId"
        value={form.userId}
        placeholder="userId"
        onChange={handleChange}
      ></input>
      <button onClick={submitHandler} class="btn btn-primary">
        INPUT
      </button>


      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="d-flex justify-content-center my-4">
            <svg
              className="mx-auto my-3 bi bi-person-circle "
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>

          <h3 className="text-center ">LOGIN</h3>
          <form>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="id"
                value={form.id}
                onChange={handleChange}
              />
              <label htmlFor="floatingName">Id</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingType">Name</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                name="type"
                className="form-control"
                value={form.type}
                onChange={handleChange}
              />
              <label htmlFor="floatingType">Type</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                name="price"
                className="form-control"
                value={form.price}
                onChange={handleChange}
              />
              <label htmlFor="floatingType">Price</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="text"
                name="stock"
                className="form-control"
                value={form.stock}
                onChange={handleChange}
              />
              <label htmlFor="floatingType">Stock</label>
            </div>

            <div className="d-grid mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                {" "}
                DAFTAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
