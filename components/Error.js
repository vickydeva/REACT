import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>Oops!!!</h1>
      <h2>Something went wrong...!</h2>
      <h3>{"Error" + " " + error.status + ": " + error.statusText}</h3>
      <h3>
        <Link to={"/"}>Direct Me</Link>
      </h3>
    </div>
  );
};

export default Error;
