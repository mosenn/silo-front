// components/QueryClientProvider.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode} from 'react';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
interface Props {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient({defaultOptions: {
    
   
  }});

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
}
