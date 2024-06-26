import { Link } from "react-router-dom";
import Admins from "../../components/AdminNav";
import "./style/topbar.css";

const TopBar = () => {
  return (
    <>
      <nav id="mynavbar"> 
        <Link to="/addvideo" className="tag logo">
          <h1>Visit Me<span className="span"> Daily</span>.</h1>
          </Link>
        <div>
        <ul id="navbar">
          <li>
        <Link to="/dashboard">
        <div className="tag active">
          <div className="tag active">Dashboard</div>
        </div>
      </Link>
      </li>
      <li>
      <Link to="/post">
        <div className="tag">
          <div className="tag">Post</div>
        </div>
      </Link>
      </li>
      <li>
      <Link to="/users">
        <div className="tag">
          <div className="tag">Users</div>
        </div>
      </Link>
      {/* <li>
      <Link to="/addvideo">
        <div className="tag">
          <div className="tag">Video</div>
        </div>
      </Link>
      </li> */}
      </li>
          </ul>
        </div>
        <div className="getmenu">
        <Admins/>
        </div>
        </nav>
    </>
  );
};
export default TopBar;
