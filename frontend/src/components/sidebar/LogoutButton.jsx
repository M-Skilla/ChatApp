import React from "react";
import { Loader2, LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {loading ? (
        <Loader2 className="w-6 h-6 animate-spin text-white" />
      ) : (
        <LogOut onClick={logout} className="w-6 h- text-white cursor-pointer" />
      )}
    </div>
  );
};

export default LogoutButton;
