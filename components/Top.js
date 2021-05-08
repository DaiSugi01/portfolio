import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const styles = {
  fill: "white",
  fontSize: "3rem",
  transform: "rotate(90deg)"
}

export default function Top() {
  return (
    <div className="h-screen w-full flex justify-center space-y-8  flex-col text-center">
      <div>
        <p className="text-4xl">Daiki Sugihara</p>
        <p className="text-sm">iOS developer / Backend developer</p>
      </div>

      <div>
        <DoubleArrowIcon
          style={{...styles}}
        />
      </div>
    </div>
  );
}
