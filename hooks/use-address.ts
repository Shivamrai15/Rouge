import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

export const useAddress = () => {
    
    const { data, error, isLoading, mutate } = useSWR('/api/v1/address', fetcher , {
        revalidateIfStale : false,
        revalidateOnReconnect : true,
        revalidateOnFocus : false
    });

    return {
        data,
        error,
        isLoading,
        mutate
    }
}