import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import { SnsIcon } from "../components/Common";

const styles = {
  fontSize: 30
};

export default function Header() {

  return (
    <nav className="w-20 min-h-screen bg-gray-800 fixed top-0 z-20">
      <div className="flex flex-col items-center min-h-screen">
        <SnsIcon
          href="https://github.com/DaiSugi01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 px-3 py-2 rounded"
        >
          <GitHubIcon style={{...styles}}/>
        </SnsIcon>

        <SnsIcon
          href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-white text-gray-300 px-3 py-2 rounded"
        >
          <LinkedInIcon style={{...styles}}/>
        </SnsIcon>
      </div>
    </nav>
  );
}
