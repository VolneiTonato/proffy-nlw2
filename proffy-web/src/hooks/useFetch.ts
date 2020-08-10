import useSWR from 'swr';
import api from '@services/api';

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR(url, async (uri) => {
    console.log(url);
    const response = await api.get(uri);

    return response.data;
  });

  return { data, error, mutate };
}
