// ----------------------------------------------------------------------------------
//  25-10. typescript-generic-hoc
// ----------------------------------------------------------------------------------
/* eslint-disable @typescript-eslint/ban-types */

// prettier-ignore
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!");
      void router.push("/23-08-login-check-hoc");
    }
  }, []);

  return <Component {...props} />;
};
