import { useState, useEffect } from "react";

const ToastCard = ({ toast }) => {
  const [cardType, setCardType] = useState("");

  function CheckCardType() {
    if (toast.type == "success") {
      setCardType("bg-green-500 text-white");
    } else if (toast.type == "error") {
      setCardType("bg-red-400 text-white");
    } else {
      setCardType("bg-yellow-500 text-black");
    }
  }

  useEffect(() => {
    CheckCardType();
    return () => {
      CheckCardType();
    };
  }, [toast]);

  setTimeout(() => {
    return <h1>hello</h1>;
  }, 4000);

  return (
    <div
      className={`w-50 h-20 text-gray-900 rounded-lg flex items-center justify-center ${cardType}`}
    >
      {toast.message}
    </div>
  );
};

export default ToastCard;
