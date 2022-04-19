import React, {useState} from 'react';
import { getInitials } from "../../utils/getInitials";
import "./bankLogo.scss";

export function BankLogo({ size, bank }) {
  const [showFallbackImg, setShowFallbackImg] = useState(() =>{
      return !bank.icon
  });

  let { colors } = bank;

  let primaryColor = colors.primary || "#222";

  let handleError = () => {
    setShowFallbackImg(true);
  };

  return (
    <div
      className="bank-logo-container"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {showFallbackImg ? (
        <div
          className="fallback-img"
          style={{
            background: primaryColor,
          }}
        >
          {getInitials(bank.name, 2)}
        </div>
      ) : (
        <img className="bank-logo" src={bank.icon} onError={handleError} />
      )}
    </div>
  );
}
