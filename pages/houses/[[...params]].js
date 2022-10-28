import { useRouter } from "next/router";

const Houses = () => {
  const router = useRouter();
  const { params=[] } = router.query;
  if (params.length == 2)
    return (
      <h1>
        List of houses having price between Rs.{params[0]} and {params[1]}
      </h1>
    );
  else if (params.length == 1)
    return (
      <h1>
        List of houses starting from Rs.{params[0]} 
      </h1>
    );

    else return <h1>List of all the houses</h1>
};

export default Houses;
