function MainLayout({ children }) {
  return (
    <div className="flex flex-col items-center h-screen select-none">
      <nav className="flex justify-between bg-[#e76f51] p-5 w-full">
        <div className="text-lg font-semibold">Dynamic Form</div>
        <ul>
          <li>Preview</li>
        </ul>
      </nav>
      <div className="w-2/3 h-full p-3">{children}</div>
    </div>
  );
}

export default MainLayout;
