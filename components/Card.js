import Image from "next/image";

export default function Card({ content }) {

  return (
    <div className="bg-white text-center shadow-xl p-8 w-2/6 rounded text-gray-600">
      <div>
        <Image
          className="rounded-full"
          src={content.logo}
          width={60}
          height={60}
          alt="Avatar"
        />
      </div>

      <div className="mt-4">
        <p className="font-bold text-black text-3xl">{content.title}</p>
      </div>

      <div className="mt-4 text-xl">
        <p className="">{content.comment}</p>
        <p className="mt-3 text-blue-500 text-2xl">Language</p>
        {content.language.map((language) => (
          <p keys={language} className="mt-2 text-gray-600">{language}</p>
        ))}
      </div>
    </div>
  );
}
