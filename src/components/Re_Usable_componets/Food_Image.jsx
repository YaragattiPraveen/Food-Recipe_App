const Food_Image = ({ img, size }) => {
  const imageSize = size || "130px";
  return (
    <div
      style={{ height: imageSize, width: imageSize }}
      className="cursor-pointer shadow-xl ease-linear transition-all duration-300 transform scale-100 hover:scale-110 flex items-center justify-center rounded-full bg-bg-shadow-color p-3"
    >
      <img
        loading="lazy"
        src={img}
        alt="food"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

export default Food_Image;
