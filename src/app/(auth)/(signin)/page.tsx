import type { Metadata } from "next";
import SignInViewPage from "../_components/sigin-view";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Authentication | Sign In",
  description: "Sign In page for authentication.",
};

export default function Page() {
  return (
    <Suspense>
      <SignInViewPage />
    </Suspense>
  );
}
