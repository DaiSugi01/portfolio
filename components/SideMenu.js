import styled from "styled-components";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SnsIcon } from "../components/Common";

const styles = {
  fontSize: 30,
};

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  min-height: 100vh;
  width: 5rem;
  z-index: 20;
  justify-content: space-between;

  @media (max-width: 799px) {
    .sideNav {
      display: none;
    }
  }
`;

const Logo = styled.div`
  height: 6rem;
  background-color: #c58753;
  font-family: Great Vibes;
  text-align: center;
  align-items: center;
  font-size: 1.8rem;
  line-height: 6rem;
  font-weight: 700;
`;

export default function SideMenu() {
  return (
    // <nav className="w-20 min-h-full max-h-screen bg-gray-800 fixed top-0 z-20 flex flex-col justify-between">
    <Navigation>
      <div className="sideNav">
        <div className="bg-gray-800">
          <Logo>DS</Logo>
          <div className="flex flex-col items-center">
            <SnsIcon
              href="https://github.com/DaiSugi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 px-3 py-2 rounded"
            >
              <GitHubIcon style={{ ...styles }} />
            </SnsIcon>

            <SnsIcon
              href="https://www.linkedin.com/in/daiki-sugihara-97b7b7150/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white text-gray-300 px-3 py-2 rounded"
            >
              <LinkedInIcon style={{ ...styles }} />
            </SnsIcon>
          </div>
        </div>
      </div>
    </Navigation>
  );
}
