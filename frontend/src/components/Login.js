import { useState } from "react";
import { login } from "../fetch/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    
  };

  const submitHandler = () => {
  login(form)
    .then((res) => {
      if (res && res.access_token) {
        navigate('/profile');
      } else {
        alert("Login gagal");
      }
    })
    .catch((err) => {
      console.error("Login error:", err);
      alert("Login error");
    });
};

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout berhasil");
    window.location.href = "/login";
  };

  return (
    <div className = "container d-flex align-items-center justify-content-center min-vh-100" >
      <div className = "card shadow-lg p-4" style={{maxWidth : "400px", width:"100%"}}>
        <div className="d-flex justify-content-center my-4">
         <svg className="mx-auto my-3 bi bi-person-circle " xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" viewBox="0 0 16 16">
           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
           <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        </div>

        <h3 className="text-center ">LOGIN</h3>
        <form>
          <div className="form-floating mb-3">
            <input
            type = "text"
            className="form-control"
            name = "name"
            value = {form.name}
            onChange={handleChange}
            />
            <label htmlFor="floatingName">Name</label>
          </div>

          <div className="form-floating mb-4">
           <input
            type = "text"
            name = "type"
            className="form-control"
            value = {form.type}
            onChange={handleChange}
            />
            <label htmlFor="floatingType">Type</label>
            </div>
            <div className="d-grid mb-3">
              <button type = "button" className = "btn btn-primary" onClick={submitHandler}> LOGIN</button>
            </div>
            <div className="d-grid">
              <button type = "button" className = "btn btn-primary" onClick={logout}> LOGOUT</button>
            </div>
            <div className="d-grid">
              <a href = "/create" className = "mt-3"> Belum punya akun? Daftar Sekarang</a>
            </div>
            
        </form>
      </div>
    </div>

  )
};

export default Login;
