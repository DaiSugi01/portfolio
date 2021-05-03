import Card from "../components/Card";
import profile from "../data/profile.json";

export default function AboutMe({ programming, others }) {

  return (
    <div className="h-screen w-full bg-sub-main">
      <div className="w-full block">
        <h1 className="font-bold text-4xl text-center mt-16">{profile.greet}</h1>
        <h2 className="mt-10 w-7/12 text-center m-auto text-xl">{profile.aboutMe}</h2>
      </div>

      <div className="mt-28 flex w-11/12 m-auto">
        {programming && programming.map(skill => <Card key={skill.id} content={skill}/>)}
      </div>

    </div>
  );
}
