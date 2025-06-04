import axios from 'axios'

const getUser = (cb)=>{ 
  const token = localStorage.getItem('token');
  console.log("Token yang dikirim ke backend:", token);     
  if (!token) {
    console.log("Token tidak ditemukan di localStorage");
    return;
  }
    axios({
        method : "GET",
        url : "http://localhost:3000/user",
        headers:{
            access_token:localStorage.getItem('token')
        },
    })

    .then((result)=>{
        console.log("Data user diterima dari backend:", result.data); 
        cb(result.data)
    })
    .catch((err)=>{
        console.log("gagal fetch user", err)
    })
}
const getProfile = (cb)=>{
    const token = localStorage.getItem('token');
    console.log("Token yang dikirim ke backend:", token);     
    if (!token) {
        console.log("Token tidak ditemukan di localStorage");
        return;
    }
    axios({
        method : "GET",
        url : "http://localhost:3000/user/profile",
        headers :{
            access_token : localStorage.getItem('token')
        },
    })
    .then((result)=>{
        cb(result.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
const create =(data)=>{
const{id,name,type,price,stock,image,userId} = data
axios({
    method:"POST",
    url : "http://localhost:3000/user/create",
    data :{
        id,
        name,
        type,
        price,
        stock,
        image,
        userId
    }
})
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
}
const update = (id,profile)=>{
    axios({
        method : "POST",
        url : "http://localhost:3000/profile/update/" + id,
        data : profile
    })
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})

}

const profileId = (id,cb)=>{
    axios({
        method:"GET",
        url :"http://localhost:3000/user/" + id
    })
    .then((result)=>{
        cb(result.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const login = (data)=>{
    const{name,type} = data
     return axios({
        method:"POST",
        url:"http://localhost:3000/user/login",
        data:{
            name,type
        }
    })
    .then((result)=>{
      console.log("Login berhasil:", result.data);
      localStorage.setItem("token", result.data.access_token);
       return result.data
    })
    .catch((err)=>{
        console.log(err)
    })
}
const updateImage = (id,file)=>{
    const formData = new FormData()
    formData.append('image',file)
    axios({
        method:"POST",
        url : `http://localhost:3000/user/updateImage/${id}`,
        data : formData
    })
    .then((result)=>{
        console.log(result,"foto berhasil di tambahkan")
    })
    .catch((err)=>{
        console.log(err,"penambahan foto gagal")
    })
}
const deleteUser = (id)=>{
    axios({
        method : "GET",
        url :"http://localhost:3000/user/delete/" + id
        
    })
    .then((result)=>{
        console.log("berhasil menghapus data",result);
    })
    .catch((err)=>{
        console.log(err)
    })
}


export { update, getUser, create,profileId, login, updateImage,deleteUser, getProfile };