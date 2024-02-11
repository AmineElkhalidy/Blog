import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" className="w-full" size="lg">
        <FcGoogle className="w-5 h-5" />
      </Button>

      <Button variant="outline" className="w-full" size="lg">
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Social;
