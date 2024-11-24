import supabase from "../db";

export const addExpenditure = async (newExpenditure) => {
  const { error } = await supabase.from("expenditures").insert(newExpenditure);
  if (error) throw error;
  console.log(error);
};

export const updateExpenditure = async (toUpdate) => {
  const { error } = await supabase.from("expenditures").update(toUpdate);
  if (error) throw error;
};

export const deleteExpenditure = async (id) => {
  const { error } = await supabase.from("expenditures").delete().eq("id", id);
  if (error) throw error;
};

export const fetchExpenditures = async () => {
  const { data, error } = await supabase.from("expenditures").select();
  if (error) throw error;
  return data;
};
