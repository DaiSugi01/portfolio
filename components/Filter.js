export default function Filter ({ text, onActive, active }) {
  
  const styles = {
    width: "10rem",
    backgroundColor: active ? "#E31C6E" : '' 
  }

  return (
    <div className="mt-10 mx-20 py-2 text-2xl text-center cursor-pointer" onClick={onActive} style={{...styles}}>
      {text}
    </div>
  )  
}
