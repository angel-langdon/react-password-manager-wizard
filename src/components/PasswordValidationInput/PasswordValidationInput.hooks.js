import { useState, useEffect } from "react";

import { getPasswordStrength } from "./PasswordValidationInput.utils";

export function useUpdateScoreOnPasswordChange(password, setPasswordScoreProp) {
  const [passwordScore, setPasswordScore] = useState(0);
  useEffect(() => {
    const { score } = getPasswordStrength(password);
    setPasswordScore(score);
  }, [password]);
  return passwordScore;
}
