import ExpenditureRow from "./ExpenditureRow";
import { fetchExpenditures } from "../apis/expenditures";
import { useQuery } from "@tanstack/react-query";

const ExpenditureList = () => {
  const {
    data: expenditures,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["expenditures"],
    queryFn: fetchExpenditures,
  });

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <div>
      {expenditures.map((data) => (
        <ExpenditureRow key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ExpenditureList;
