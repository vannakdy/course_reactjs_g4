import styles from "./Botton.module.css";
const Botton = ({title,textColor,bgColor,onClick}) => {
  return (
    <div>
        <button 
            className={styles.btn_container}
            style={{
                color:textColor,
                backgroundColor:bgColor
            }}
            onClick={()=>onClick(10)}
        >
            {title}
        </button>
    </div>
  );
};

export default Botton;
