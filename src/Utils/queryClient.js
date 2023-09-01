import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5*1000,
    notifyOnChangePropsExclusion: ['isStale'],
  }
})

export default queryClient;