import React, { useState } from "react";

import CenteredAlert from "components/CenteredAlert/CenteredAlert";
import { getPasswordStrength } from "components/PasswordValidationInput/PasswordValidationInput.utils";
import PasswordValidationInput from "components/PasswordValidationInput/PasswordValidationInput";
import { useHandleNextButtonClick } from "./PasswordCreationForm.hooks";
import infoIcon from "assets/icons/info.svg";
import "./PasswordCreationForm.scss";

const CLUE_MAXIMUM_LENGTH = 255;
const MAX_PASSWORD_LENGTH = 25;

export default function PasswordCreationForm(props) {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [isPasswordRequirementsAlertVisible, setIsPasswordRequirementsVisible] =
    useState(false);
  const {
    password,
    setPassword,
    repeatedPassword,
    setRepeatedPassword,
    clue,
    setClue,
    nextButtonClicked,
    setNextButtonClicked,
    handleNextButtonClick,
  } = props;
  useHandleNextButtonClick(
    nextButtonClicked,
    setNextButtonClicked,
    handleNextButtonClick,
    password,
    repeatedPassword,
    setIsPasswordRequirementsVisible
  );

  return (
    <div className="PasswordCreationForm">
      <div>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas. No podrás recuperar tu contraseña, así que
        recuérdala bien.
      </div>
      <form className="password-form">
        <div className="column">
          <strong>Crea tu Contraseña Maestra</strong>
          <PasswordValidationInput
            value={password}
            onChange={(e) => {
              if (e.target.value.length <= MAX_PASSWORD_LENGTH)
                setPassword(e.target.value);
            }}
            placeholder="Introduce tu contraseña"
          />
        </div>
        <div className="column">
          <strong>Repite tu Contraseña Maestra</strong>
          <PasswordValidationInput
            value={repeatedPassword}
            onChange={(e) => {
              if (e.target.value.length <= MAX_PASSWORD_LENGTH)
                setRepeatedPassword(e.target.value);
            }}
            placeholder="Repite tu contraseña"
          />
        </div>
      </form>
      <div className="passwords-do-not-match">
        {password !== repeatedPassword && repeatedPassword.length !== 0
          ? "Las contraseñas no coinciden"
          : ""}
      </div>
      <div>
        También, puedes crear una pista que te ayuda a recordar tu contraseña
        maestra.
      </div>
      <div className="column">
        <strong className="row vertical-centered">
          Crea tu pista para recordar tu contraseña (opcional)
          <img
            className="info-icon"
            src={infoIcon}
            onClick={() => setShowExtraInfo(true)}
            alt="info-button"
          ></img>
          {showExtraInfo ? (
            <CenteredAlert>
              <div className="extra-info column ">
                <div>
                  Dar una pista para que puedas recordar la contraseña es muy
                  recomendable ya que en el caso de que pierdas no podemos hacer
                  nada para ayudarte a recuperarla
                </div>
                <button
                  className="close-button"
                  onClick={() => setShowExtraInfo(false)}
                >
                  X
                </button>
              </div>
            </CenteredAlert>
          ) : null}
        </strong>
        <input
          placeholder="Introduce tu pista"
          value={clue}
          onChange={(e) => {
            if (e.target.value.length < 256) setClue(e.target.value);
          }}
        ></input>
        <div className="clue-length-indicator">{`${clue.length}/${CLUE_MAXIMUM_LENGTH}`}</div>
        {isPasswordRequirementsAlertVisible ? (
          <CenteredAlert>
            <div className="PasswordRequirementsAlert column">
              <strong>
                La contraseña no tiene los siguientes requisitos de seguridad:
              </strong>
              {getPasswordStrength(password)
                .requirements.filter((req) => !req.passesTest)
                .map((req) => (
                  <li>{req.description}</li>
                ))}
              <button
                className="close-button"
                onClick={() => setIsPasswordRequirementsVisible(false)}
              >
                X
              </button>
            </div>
          </CenteredAlert>
        ) : null}
      </div>
    </div>
  );
}
