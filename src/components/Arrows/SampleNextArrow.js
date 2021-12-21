function SampleNextArrow(props) {
  const { className, onClick, color } = props;
 
  return (
    <button
      onClick={onClick}
      className={className.includes("slick-disabled") ? "d-none" : "d-block"}
      style={{
        position: "absolute",
        zIndex: "1",
        top: "50%",
        border: "none",
        backgroundColor: "transparent",
        fontSize: "2.3rem",
        color: color,
        cursor: "pointer",
        transform: "translateY(-50%)",
        right: "3rem",
      }}
    >
   <i className="icon-next_arrow"></i>
    </button>
  );
}
export default SampleNextArrow;
