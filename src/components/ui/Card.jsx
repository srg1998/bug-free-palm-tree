function Card({ children }) {
  return (
    <div className="bg-white px-3 py-6 rounded-lg border-l-8 border-red-700 flex flex-col gap-y-6">
      {children}
    </div>
  );
}

export default Card;
