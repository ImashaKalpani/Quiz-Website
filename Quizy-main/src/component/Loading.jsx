// LoadingSpinner.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center space-x-2 animate-pulse">
      <div className="w-4 h-4 bg-[#19444a] rounded-full"></div>
      <div className="w-4 h-4 bg-[#19444a] rounded-full"></div>
      <div className="w-4 h-4 bg-[#19444a] rounded-full"></div>
    </div>
  );
};

export default Loading;
