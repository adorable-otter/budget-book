import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpenditure, deleteExpenditure, updateExpenditure } from "../apis/expenditures";

const useExpenditures = () => {
  const queryClient = useQueryClient();

  const addExpenditureMutation = useMutation({
    mutationFn: addExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenditures"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const updateExpenditureMutation = useMutation({
    mutationFn: updateExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenditures"]);
    },
  });

  const deleteExpenditureMutation = useMutation({
    mutationFn: deleteExpenditure,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenditures"]);
    },
  });

  return { addExpenditureMutation, updateExpenditureMutation, deleteExpenditureMutation };
};

export default useExpenditures;
