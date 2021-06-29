import { useState, useEffect } from "react";

import {
  defaultRequirements,
  getPasswordStrength,
} from "./PasswordValidationInput.utils";

export function useUpdateScoreOnPasswordChange(password) {
  const [passwordScore, setPasswordScore] = useState(0);
  const [requirements, setRequirements] = useState(defaultRequirements);
  useEffect(() => {
    console.log(password);
    const [score, requirmnts] = getPasswordStrength(password);
    setPasswordScore(score);
    setRequirements(requirmnts);
  }, [password]);
  return [passwordScore, requirements];
}
