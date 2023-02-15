import { Cookies } from "react-cookie";

export const isExistToken = () => {
  const cookies = new Cookies();
  const myToken = cookies.get("Authorization");
  console.log(myToken);
  if (!myToken) return false;
  return true;
};
