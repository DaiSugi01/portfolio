import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import styled from "styled-components";

const styles = {
  fill: "white",
  fontSize: "3rem",
  transform: "rotate(90deg)",
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export default function Top() {
  return (
    <Wrapper className="bg-main">
      <div>
        <p className="text-4xl">Daiki Sugihara</p>
        <p className="text-sm">iOS developer / Backend developer</p>
      </div>

      <div>
        <DoubleArrowIcon style={{ ...styles }} />
      </div>
    </Wrapper>
  );
}
