import React, { useEffect, useState } from "react";
import { deleteUser, getUser, getProfile } from "../fetch/user.js";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [profile,setProfile ]= useState([])

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("harus login terlebih dahulu");
      navigate("/login");
      return;
    }
    console.log("mengambil data user");
    getUser((data) => {
      setUser(data);
    },[]);

    getProfile((data)=>{
      setProfile(data)
    },[])
  });


  return (
    <>
    {/* navbar */}
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex align-items-center">
            <h3 className="text-white me-2 mb-0">Tokopedia</h3>
            <p className="text-white mb-0 ms-5">Kategori</p>
            <form className="">
              <input
                className="form-control  ms-5"
                style = {{width : "200%"}}
                type="search"
                placeholder="cari di tokopedia"
                aria-label="search"
              ></input>
            </form>
          </div>
        </div>
        <div className="d-flex">
          <p className="text-white mb-0 ms-5">keranjang</p>
          <p className="text-white mb-0 ms-3">notifikasi</p>
          <p className="text-white mb-0 ms-3">chat</p>
          <p className="text-white mb-0 ms-3">toko</p>
        </div>
        <div className="me-5">
          {user.map((users) => {
            return (
              <>
                <div>
                  <p className="text-white mb-0 ms-5">{users.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {/* Kategori pilihan */}
      <div className = "row">
        <div className = " my-4 ms-4 me-6">
          <div className = "row col-6">
            <h3 className = "fw-bold">Kategori Pilihan</h3>
            {
              profile.map((profiles)=>{
                return(
                  <>
                  <div className="col-3">
                    <div className="card border border-dark my-3 p-3 my-2 d-inline-block ">
                      <img 
                      src = {`http://localhost:3000/uploads/${profiles.image}`} 
                      alt = "gambar card"
                      style = {{
                        width : "90px",
                        height : "85px"
                      }}
                      />
                      <h4 className="card-title text-center fw-bold">{profiles.name}</h4>
                    </div>
                    </div>
                  </>
                )
              })
            }
          </div>  
      </div>
      
      </div>
    </>
  );
};

export default Profile;
