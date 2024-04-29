import { useParams, useLocation, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log(params);

  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.toString());
  console.log(searchParams.get("age"));

  return <p>User {params.id}</p>;
};

export default UserDetailPage;
