import supabase from '../db';

export const requestAddExpenditure = async (newExpenditure) => {
  const { error } = await supabase.from('expenditures').insert(newExpenditure);
  if (error) throw error;
  console.log(error);
};

export const requestUpdateExpenditure = async (toUpdate) => {
  const { error } = await supabase.from('expenditures').update(toUpdate);
  if (error) throw error;
};

export const requestDeleteExpenditure = async (id) => {
  const { error } = await supabase.from('expenditures').delete().eq('id', id);
  if (error) throw error;
};

export const fetchExpenditures = async () => {
  const { data, error } = await supabase.from('expenditures').select('*, categories!left(*)');
  if (error) throw error;
  return data;
};

export const fetchExpenditureCategories = async () => {
  const { data, error } = await supabase.from('categories').select().order('order');
  if (error) throw error;
  return data;
};
