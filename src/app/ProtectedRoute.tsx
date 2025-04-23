"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }else if (status === "authenticated" && !session?.user?.isAdmin){
      router.replace("/");
    }
  }, [status, router,session]);

  useEffect(() => {
    console.log("Session:", session);
    console.log("Status:", status);
  }, [session, status]);

  if (status == "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (status === "authenticated" && session?.user?.isAdmin) {
    return <>{children}</>;
  }

  return null

}
