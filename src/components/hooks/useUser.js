import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from '../../api/api';

export default function useUser() {
  const { isLoading, data, isError } = useQuery(['myinfo'], getMyInfo, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}
