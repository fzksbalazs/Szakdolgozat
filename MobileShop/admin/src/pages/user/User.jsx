import {
  CalendarToday,
  PermIdentity,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import "./user.css";

export default function User() {

  const location = useLocation();
  const userID = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userID)
  );


  


  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>      
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                Username: {user.username}
              </span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                Created at: ({user.createdAt})
              </span>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
}
