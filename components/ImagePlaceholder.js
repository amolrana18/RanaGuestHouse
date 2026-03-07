const ImagePlaceholder = ({ text, height = "200px" }) => {
  return (
    <div 
      className="image-placeholder"
      style={{ height }}
    >
      <span>📷 {text}</span>
    </div>
  );
};

export default ImagePlaceholder;
