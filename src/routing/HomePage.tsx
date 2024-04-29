import { Link } from "react-router-dom";

const HomePage = () => {
  // throw new Error("Not implemented");

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/users">Users</Link>
      <br />
      <Link to="/contacts">Contacts</Link>
    </>
  );
};

export default HomePage;
