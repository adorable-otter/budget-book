import supabase from '../db';

export const requestAddBudget = async (newBudget) => {
  const { error } = await supabase.from('budgets').insert(newBudget);
  if (error) throw error;
};

export const fetchTotalAmountsByMonth = async ({ userId, startDate, endDate }) => {
  const { data, error } = await supabase
    .rpc('get_total_amounts_by_month', {
      p_user_id: userId,
      p_start_date: startDate,
      p_end_date: endDate,
    })
    .single();
  if (error) throw error;
  return data;
};

export const fetchBudgetByYearMonth = async ({ userId, year, month }) => {
  const { data, error } = await supabase
    .from('budgets')
    .select()
    .eq('year', year)
    .eq('month', month)
    .eq('user_id', userId)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const requestUpdateBudget = async (toUpdate) => {
  const { error } = await supabase.from('budgets').update(toUpdate).eq('id', toUpdate.id);
  if (error) throw error;
};
