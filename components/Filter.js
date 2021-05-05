export default function Filter ({ text, onActive, active }) {

  return (
    <div className="mt-10 mx-20 w-40 py-2 text-2xl text-center cursor-pointer" onClick={onActive} style={active ? {backgroundColor: "#E31C6E"} : {} }>
      {text}
    </div>
  )  
}
