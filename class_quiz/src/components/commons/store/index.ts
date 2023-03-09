// ----------------------------------------------------------------------------------
//  day 21. global-state - store
// ----------------------------------------------------------------------------------

import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});
