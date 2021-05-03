import Card from "../components/Card";
import profile from "../data/profile.json";

export default function AboutMe({ programming, others }) {

  return (
    <div className="h-screen w-full bg-sub-main">
      <div className="w-full block">
        <h1 className="text-5xl text-center">{profile.greet}</h1>
        <h2>{profile.aboutMe}</h2>
      </div>

      <div className="flex w-11/12 bg-blue-400 m-auto">
        {programming && programming.map(skill => <Card key={skill.id} content={skill}/>)}
      </div>

    </div>
  );
}
