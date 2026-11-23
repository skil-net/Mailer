import { HashRouter } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { Toasts } from "@/components/Toasts";
import Auth from "@/screens/Auth";
import Onboarding from "@/screens/Onboarding";
import { useAuthStore } from "@/store/useAuthStore";

export default function App() {
  const onboarded = useAuthStore((s) => s.onboarded);
  const isAuthenticated = useAuthStore((s) => s.auth.isAuthenticated);

  if (!onboarded) return <Onboarding />;
  if (!isAuthenticated)
    return (
      <>
        <Auth />
        <Toasts />
      </>
    );

  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
