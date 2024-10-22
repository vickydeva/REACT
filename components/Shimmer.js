const Shimmer = () => {
  console.log("shimmer called.");
  return (
    <div>
      <button className="btn-shimmer"></button>
      <button className="btn-shimmer"></button>
      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
