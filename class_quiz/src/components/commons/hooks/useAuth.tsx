// ----------------------------------------------------------------------------------
//  day 25. custom-hooks - useAuth
// ----------------------------------------------------------------------------------

import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!");
      void router.push("/25-custom-hooks/02/login");
    }
  }, []);
}
