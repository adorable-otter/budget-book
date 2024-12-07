import supabase from '../db';

export const requestAddBudget = async (newBudget) => {
  const { error } = await supabase.from('budgets').insert(newBudget);
  if (error) throw error;
};
