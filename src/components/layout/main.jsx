import { NavLink } from "react-router-dom";

function MainLayout({ children }) {
  const checkActiveLink = ({ isActive }) => (isActive ? "text-slate-100 bg-red-300 p-2 rounded" : "text-white");

  return (
    <div className="flex flex-col items-center h-screen select-none">
      <nav className="flex justify-between bg-[#e76f51] p-5 w-full">
        <div className="text-lg font-semibold">Dynamic Form</div>
        <ul className="flex gap-x-3 items-center">
          <li className="hover:text-slate-800">
            <NavLink className={checkActiveLink} to="/form">
              New Form
            </NavLink>
          </li>
          <li className="hover:text-slate-800">
            <NavLink className={checkActiveLink} to="/preview">
              Preview
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-2/3 h-full p-3">{children}</div>
    </div>
  );
}

export default MainLayout;
