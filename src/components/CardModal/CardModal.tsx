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
}

const Modal: React.FC<CardModalProps> = ({
  isOpen,
  onClose,
  name,
  creditCode,
  semester,
  required,
  requirement
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
          {required.length > 0 && (
            <>
              <p className="modal-requisites-title">POSSUI REQUISITO</p>
              {required.map((req) => (
                <p className="modal-req-type1">
                  {req.creditCode} - {req.name}
                </p>
              ))}
            </>
          )}
          {requirement.length > 0 && (
            <>
              <p className="modal-requisites-title">É PRÉ-REQUISITO DE</p>
              {requirement.map((req) => (
                <p className="modal-req-type2">
                  {req.creditCode} - {req.name}
                </p>
              ))}
            </>
          )}
          {required.some((req) => req.requirementType === "COREQUISITE") && (
            <>
              <p className="modal-requisites-title">POSSUI CO-REQUISITO</p>
              {required
                .filter((req) => req.requirementType === "COREQUISITE")
                .map((filtReq) => (
                  <p className="modal-req-type1">
                    {filtReq.creditCode} - {filtReq.name}
                  </p>
                ))}
            </>
          )}
          {required.some((req) => req.requirementType === "SPECIAL") && (
            <>
              <p className="modal-requisites-title">
                POSSUI REQUISITO ESPECIAL
              </p>
              {required
                .filter((req) => req.requirementType === "SPECIAL")
                .map((filtReq) => (
                  <p className="modal-req-type2">
                    {filtReq.creditCode} - {filtReq.name}
                  </p>
                ))}
            </>
          )}
        </div>
        <div className="modal-desc">
          <p className="modal-desc-title"> Descrição</p>
          <p className="modal-desc-text">
            {" "}
            Estudo dos sistemas de numeração. Introdução a um sistema
            computacional básico: entrada e saída, unidade de processamento e
            memória. Apresentação da relação software-hardware: conceito de
            operação com o processador, linguagem de montagem, compiladores,
            montadores, ligadores e carregadores. Estudo de circuitos
            combinacionais e otimização de representações Booleanas: portas
            lógicas e formas algébricas. Exploração de problemas básicos:
            definição de caminho crítico e tipos de conflitos em processadores
            pipeline. Apresentação dos princípios e padrões subjacentes a
            sistemas de entrada e saída em sistemas computacionais. Estudo de
            conceitos relativos à hierarquia de memória, com foco no papel da
            memória cache. Estudo de conceitos básicos de multiprocessamento.
            Avaliação de desempenho de arquiteturas de computadores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
