import React from "react";

interface PeopleProps {
  person: {
    name: string;
    gender?: string | undefined;
    birth_year?: Date | undefined;
  };
}

const Person: React.FC<PeopleProps> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
