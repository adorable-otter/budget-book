import supabase from '../db';

export const requestAddBudget = async (newBudget) => {
  const { error } = await supabase.from('budgets').insert(newBudget);
  if (error) throw error;
};

export const fetchMonthlyMainStatistic = async ({ userId, year, month }) => {
  const { data, error } = await supabase
    .rpc('get_monthly_main_statistics', {
      p_user_id: userId,
      p_year: year,
      p_month: month,
    })
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
