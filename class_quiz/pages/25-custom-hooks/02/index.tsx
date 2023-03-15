// ----------------------------------------------------------------------------------
//  day 25-02. custom-hooks - main
//  path : http://localhost:3000/25-custom-hooks/02
// ----------------------------------------------------------------------------------

import { useAuth } from "../../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  useAuth();

  return <div>📌 profile page</div>;
}
