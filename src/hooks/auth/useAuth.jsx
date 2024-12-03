import { useNavigate } from 'react-router-dom';
import { fetchUserInfoById, requestLogin } from '../../apis/auth';
import supabase from '../../db';
import { useDispatch } from 'react-redux';
import { clearAuthUser, setAuthUser } from '../../redux/slices/AuthUserSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (credentials) => {
    const { id, email } = await requestLogin(credentials);
    const { nickname, profile_image: profileImage } = await fetchUserInfoById(id);
    dispatch(setAuthUser({ id, email, nickname, profileImage }));
    navigate('/');
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    dispatch(clearAuthUser());
    navigate('/');
  };

  return { login, logout };
};

export default useAuth;
