import styled from "styled-components";

import Image from "next/image";

const CardWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 0.25rem;
  min-width: 320px;
  width: 32%;
  padding: 2rem;
  background-color: #e5e7eb;
`;

export default function Card({ content }) {
  return (
    <CardWrapper className="text-center shadow-xl rounded text-gray-600">
      <div>
        <Image src={content.logo} width={60} height={60} alt="skill" />
      </div>

      <div className="mt-4">
        <p className="font-bold text-black text-3xl">{content.title}</p>
      </div>

      <div className="mt-4 text-xl">
        <p className="">{content.comment}</p>
        <p className="mt-3 text-blue-500 text-2xl">Languages</p>
        {content.language.map((language) => (
          <p key={language} className="mt-2 text-gray-600">
            {language}
          </p>
        ))}

        {content.database && (
          <p className="mt-3 text-blue-500 text-2xl">Database</p>
        )}
        {content.database &&
          content.database.map((db) => (
            <p key={db} className="mt-2 text-gray-600">
              {db}
            </p>
          ))}

        {content.infrastructure && (
          <p className="mt-3 text-blue-500 text-2xl">Infrastructure</p>
        )}
        {content.infrastructure &&
          content.infrastructure.map((infra) => (
            <p key={infra} className="mt-2 text-gray-600">
              {infra}
            </p>
          ))}
      </div>
    </CardWrapper>
  );
}
