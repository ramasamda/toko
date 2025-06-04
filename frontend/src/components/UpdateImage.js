import { useState, useEffect } from "react";
import { profileId, updateImage } from "../fetch/user";
import { useNavigate, useParams } from "react-router-dom";
// import { update } from "../../../backend/controller/1"

const UpdateImage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();


  const submitHandler = () => {
    updateImage(id, file);
    alert("foto berhasil di tambahkan");
    navigate('/profile')
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [form, setForm] = useState({
    name: "",
    type: "",
  });

  const { id } = useParams();

  useEffect(() => {
    profileId(id, (result) => {
      setFile({
        id: result.id,
      });
    });
  }, [id]);

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="d-flex justify-content-center my-4">
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
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
            </label>
            <input
              type="file"
              id="imageUpload"
              name="image"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </div>
          <h3 className="text-center ">UPDATE IMAGE</h3>
          <form>
            <div className="d-grid mb-3">
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={submitHandler}
              >
                {" "}
                UPDATE IMAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UpdateImage;
