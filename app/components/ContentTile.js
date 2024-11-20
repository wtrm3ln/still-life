const ContentTile = ({ children }) => {

  return (
    <div
      className={`p-4 border flex flex-col justify-center items-center border-secondary bg-primary hover:text-white`}
    >
      {children}
    </div>
  );
};

export default ContentTile;
