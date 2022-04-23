import "./welcome.css";
import { useSelector } from "react-redux";


  


export default function Welcome() {
  const admin = useSelector((state) => state.user.currentUser)
  
  return (
    
    
    <div className="home">

      <h1 className="title" >ADMIN OLDAL</h1>
      <h1 className="welcomeTo">Üdvözöljük az admin oldalon,  {admin.username}!</h1>
      <h2 className="email">({admin.email})</h2>
      
  
    </div>

  );
}
