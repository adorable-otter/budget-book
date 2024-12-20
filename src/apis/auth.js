import supabase from '../db';
import defaultProfileImagePath from '/defaultProfile.png?url';

export const requestSignUp = async ({ newAuthUser }) => {
  const user = await addAuthUser(newAuthUser);
  await addUserInfo({
    id: user.id,
    nickname: newAuthUser.nickname,
    profile_image: defaultProfileImagePath,
  });
};

const addAuthUser = async (newAuthUser) => {
  const { data, error } = await supabase.auth.signUp(newAuthUser);
  if (error) throw error;
  return data.user;
};

const addUserInfo = async (userInfo) => {
  const { error } = await supabase.from('users').insert(userInfo);
  if (error) throw error;
};

export const requestLogin = async (authInfo) => {
  const { data, error } = await supabase.auth.signInWithPassword(authInfo);
  if (error) throw error;
  return data.user;
};

export const fetchUserInfoById = async (id) => {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data;
};
