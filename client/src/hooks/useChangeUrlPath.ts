import { useLocation, useNavigate } from 'react-router-dom';

export const useChangeUrlPath = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const changeUrlPath = (path: string) => {
    if (location.pathname !== path) navigate(path);
  };

  return { changeUrlPath };
};
