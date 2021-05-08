import styled from "styled-components";

const Button = styled.div`
  margin: 2.5rem 5rem 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 10rem;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 799px) {
    margin: 0;
  }
`;

export default function Filter({ text, onActive, active }) {
  const styles = {
    backgroundColor: active ? "#E31C6E" : "",
  };

  return (
    <Button onClick={onActive} style={{ ...styles }}>
      {text}
    </Button>
  );
}
