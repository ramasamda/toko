import { useState, useEffect } from 'react';
import { profileId, update } from '../fetch/user';
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    type: "",
    price: "",
    stock: "",
    image: "",
    userId: ""
  });

  const { id } = useParams();

  useEffect(() => {
    profileId(id, (result) => {
      setForm({
        id: result.id,
        name: result.name,
        type: result.type,
        price: result.price,
        stock: result.stock,
        image: result.image,
        userId: result.userId
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitHandler = () => {
    update(form.id, form);
    alert('data berhasil diupdate');
    console.log(form);
  };

  const logout = () => {
  localStorage.removeItem("token"); // Hapus token
  window.location.href = "/login"; // Redirect ke halaman login (atau yang lain)
  alert("logout berhasil")
};
  return (
    <>
      <h1>{form.name}</h1>
      <input type="text" name="id" value={form.id} onChange={handleChange} placeholder='ID' />
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' />
      <input type="text" name="type" value={form.type} onChange={handleChange} placeholder='Type' />
      <input type="text" name="price" value={form.price} onChange={handleChange} placeholder='Price' />
      <input type="text" name="stock" value={form.stock} onChange={handleChange} placeholder='Stock' />
      <input type="text" name="image" value={form.image} onChange={handleChange} placeholder='Image' />
      <input type="text" name="userId" value={form.userId} onChange={handleChange} placeholder='User ID' />
      <button onClick={submitHandler} className="btn btn-primary">INPUT</button>
      

    </>
  );
};

export default UpdateProfile;
