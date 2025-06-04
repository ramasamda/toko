import {Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import CreateProfile from './CreateProfile'
import UpdateProfile from './Update'
import Login from './Login'
import UpdateImage from './UpdateImage'
import CardProfile from './CardProfile'



const Menu = ()=>{
    return(
        <>
        <Routes> 
            <Route path = "/profile" element = {<Profile></Profile>}> </Route>
            <Route path = "/create" element={<CreateProfile></CreateProfile>}></Route>
            <Route path="/profile/update/:id" element={<UpdateProfile />} />
            <Route path ="/login" element = {<Login></Login>}></Route>
            <Route path = "/user/:id" element = {<UpdateImage></UpdateImage>}></Route>
            <Route path = "/cardProfile/:id" element={<CardProfile></CardProfile>}></Route>
        </Routes>    
        </>
    )
}

export default Menu