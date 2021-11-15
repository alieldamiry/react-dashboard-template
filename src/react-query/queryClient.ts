import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export function queryErrorHandler(error: any): void {
  toast.error(error?.response?.data?.message);
  console.log(" react query error", error?.response);
}

export function mutationSuccessHandler(res: any): void {
  toast.success(res?.data?.msg);
}

// to satisfy typescript until this file has uncommented contents
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
      onSuccess: mutationSuccessHandler,
    },
  },
});
