// import { GitHubIcon, LinkedInIcon } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Header() {
  const iconSize = {
    fontSize: 45
  }
  return (
    <nav className="w-32 min-h-screen bg-gray-800 fixed top-0 z-20">
      <div className="flex flex-col items-center min-h-screen">
        <a
          href="https://github.com/DaiSugi01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <GitHubIcon style={{fill: "white"}, { fontSize: iconSize.fontSize }}/>
        </a>

        <a
          href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-white text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
        >
          <LinkedInIcon style={{fill: "white"}, { fontSize: iconSize.fontSize }}/>
        </a>

        <a
          href="mailto:volble124@gmail.com"
          className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
        >
          {/* <Image
            className="fill-current"
            src="/mail.svg"
            width={30}
            height={30}
            alt="github"
          /> */}
        </a>
      </div>
    </nav>
  );
}
