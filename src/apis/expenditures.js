import supabase from '../db';

export const requestAddExpenditure = async (newExpenditure) => {
  const { error } = await supabase.from('expenditures').insert(newExpenditure);
  if (error) throw error;
};

export const requestUpdateExpenditure = async (toUpdate) => {
  const { error } = await supabase.from('expenditures').update(toUpdate).eq('id', toUpdate.id);
  if (error) throw error;
};

export const requestDeleteExpenditure = async (id) => {
  const { error } = await supabase.from('expenditures').delete().eq('id', id);
  if (error) throw error;
};

export const fetchExpenditures = async (userId, date, nextDate) => {
  const { data, error } = await supabase
    .from('expenditures')
    .select('*, categories!left(*)')
    .eq('user_id', userId)
    .gte('date', date)
    .lt('date', nextDate);
  if (error) throw error;
  return data;
};

export const fetchExpenditureCategories = async () => {
  const { data, error } = await supabase.from('categories').select().order('order');
  if (error) throw error;
  return data;
};
