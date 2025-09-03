"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/ReactClient";
import { shadcn } from "@clerk/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);

  return (
    <ClerkProvider
      appearance={{
        theme: shadcn,
      }}
      publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      dynamic
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
