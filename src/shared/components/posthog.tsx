import { PostHogProvider } from "posthog-js/react";
import type * as React from "react";

type PosthogProviderProps = {
  children: React.ReactNode;
};

export function PosthogProvider({ children }: PosthogProviderProps) {
  return (
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: "2025-05-24",
      }}
    >
      {children}
    </PostHogProvider>
  );
}
