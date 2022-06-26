
import Botton from "../../components/button/Botton";
const AboutScreen = () =>{

  const  hadleViewMore = () => {

  }

  return (
    <div>
      <h1>AboutScreen</h1>
      <Botton
        title={"Click"}
        bgColor={"red"}
        textColor="white"
        onClick={hadleViewMore} 
      />
    </div>
  )
}

export default AboutScreen;