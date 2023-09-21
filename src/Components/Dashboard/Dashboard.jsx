import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            this is dashboard
          <div className="flex gap-6">
          <div className="w-[30%] bg-red-400 p-4">
                <ul>
                    <li className=" grid grid-rows-3 gap-3">
                        <Link to="/dashboard"> DashboardLayout</Link>
                        <Link to="/dashboard/profile"> Profile</Link>
                        <Link to="/dashboard/editProfile"> EditProfile</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[70%] bg-gray-600 p-6">
                <Outlet></Outlet>
            </div>
          </div>

        </div>
    );
};

export default Dashboard;