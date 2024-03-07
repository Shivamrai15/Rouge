import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

export const useOrder = () => {
    
    const { data, error, isLoading, mutate } = useSWR('/api/v1/order', fetcher , {
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