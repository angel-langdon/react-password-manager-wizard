import React, { useState } from "react";
import PasswordValidationInput from "components/PasswordValidationInput/PasswordValidationInput";

import infoIcon from "assets/icons/info.svg";
import "./PasswordCreationForm.scss";

const CLUE_MAXIMUM_LENGTH = 255;

export default function PasswordCreationForm() {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const [clue, setClue] = useState("");
  return (
    <div className="PasswordCreationForm">
      <div>
        En primer lugar, debes crear una contraseña diferente para sus
        pertenencias electrónicas. No podrás recuperar tu contraseña, así que
        recuérdala bien.
      </div>
      <div className="password-form">
        <div className="column">
          <strong>Crea tu Contraseña Maestra</strong>
          <PasswordValidationInput
            value={firstPassword}
            onChange={(e) => setFirstPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
          />
        </div>
        <div className="column">
          <strong>Repite tu Contraseña Maestra</strong>
          <PasswordValidationInput
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
            placeholder="Repite tu contraseña"
          />
        </div>
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
          ></img>
          {showExtraInfo ? (
            <div className="extra-info">
              Dar una pista para que puedas recordar la contraseña es muy
              recomendable ya que en el caso de que pierdas no podemos hacer
              nada para ayudarte a recuperarla
              <button
                className="hide-extra-info secondary"
                onClick={() => setShowExtraInfo(false)}
              >
                X
              </button>
            </div>
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
      </div>
    </div>
  );
}
