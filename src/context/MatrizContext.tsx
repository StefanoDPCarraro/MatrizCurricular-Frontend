import React, { createContext, useState, ReactNode } from "react";

// Defina o tipo de Subject que você está usando
interface Subject {
  creditCode: string;
  name: string;
  requirements: any[];
  required: any[];
}

interface MatrizContextProps {
  selectedSubject: Subject | null;
  setSelectedSubject: (subject: Subject | null) => void;
}

// Crie o contexto com valores padrão
export const MatrizContext = createContext<MatrizContextProps | undefined>(
  undefined
);

interface MatrizProviderProps {
  children: ReactNode;
}

export const MatrizProvider: React.FC<MatrizProviderProps> = ({ children }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  return (
    <MatrizContext.Provider value={{ selectedSubject, setSelectedSubject }}>
      {children}
    </MatrizContext.Provider>
  );
};
