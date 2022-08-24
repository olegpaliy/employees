import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../services/getUser";

const EployeeProfile = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getUser(id).then((res) => setData(res));
  }, [id]);

  return (
    <article>
      <h2>
        {data.name} {data.salary}
      </h2>
    </article>
  );
};

export default EployeeProfile;
