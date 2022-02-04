const Header = ({ handelAddTimer }) => {
  return (
    <>
      <nav className="nav flex justify-between items-center bg-stone-100 p-4">
        <h1 className="text-black text-3xl font-bold">timer</h1>
        <button
          className="text-white bg-black rounded py-1 px-2.5 hover:opacity-90"
          onClick={handelAddTimer}
        >
          AddTimer
        </button>
      </nav>
    </>
  );
};

export default Header;
