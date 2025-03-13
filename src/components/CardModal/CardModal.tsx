import React from "react";
import "./CardModal.scss";
import { Requirements } from "@dtos/RequirementsDTO";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  creditCode: string;
  semester: number;
  required: Requirements[];
  requirement: Requirements[];
  description: string;
  positionRequirement?: number;
}

const Modal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  name,
  creditCode,
  semester,
  required,
  requirement,
  description,
  positionRequirement
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <p className="modal-card-name">{name}</p>
            <p className="modal-card-subtitle">
              {creditCode} Nível {semester}
            </p>
          </div>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-divisor"></div>
        <div className="modal-requisites">
          {required.some((req) => req.requisiteType === "PREREQUISITE") && (
            <>
              <p className="modal-requisites-title">POSSUI PRÉ-REQUISITO</p>
              {required
                .filter((req) => req.requisiteType === "PREREQUISITE")
                .map((filtReq) => (
                  <p className="modal-req-type1">
                    {filtReq.preRequirementCreditCode} -{" "}
                    {filtReq.preRequirementCurriculumCode}
                  </p>
                ))}
            </>
          )}
          {required.some((req) => req.requisiteType === "COREQUISITE") && (
            <>
              <p className="modal-requisites-title">POSSUI CO-REQUISITO</p>
              {required
                .filter((req) => req.requisiteType === "COREQUISITE")
                .map((filtReq) => (
                  <p className="modal-req-type2">
                    {filtReq.preRequirementCreditCode} -{" "}
                    {filtReq.preRequirementCurriculumCode}
                  </p>
                ))}
            </>
          )}
          {required.some((req) => req.requisiteType === "SPECIAL") && (
            <>
              <p className="modal-requisites-title">
                POSSUI REQUISITO ESPECIAL
              </p>
              {required
                .filter((req) => req.requisiteType === "SPECIAL")
                .map((filtReq) => (
                  <p className="modal-req-type1">
                    {filtReq.preRequirementCreditCode} -{" "}
                    {filtReq.preRequirementCurriculumCode}
                  </p>
                ))}
            </>
          )}
          {requirement.length > 0 && (
            <>
              <p className="modal-requisites-title">LIBERA</p>
              {requirement.map((req) => (
                <p className="modal-req-type2">
                  {req.courseSubjectCreditCode} -{" "}
                  {req.courseSubjectCurriculumCode}
                </p>
              ))}
            </>
          )}
          {positionRequirement && (
            <>
              <p className="modal-position-requirement">
                {" "}
                Possui requisito de Posição ({
                  positionRequirement
                } Créditos){" "}
              </p>
            </>
          )}
        </div>
        <div className="modal-desc">
          <p className="modal-desc-title"> Descrição</p>
          <p className="modal-desc-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
