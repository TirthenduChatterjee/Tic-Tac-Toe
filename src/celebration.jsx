import './celebration.css';
function Celebration(Props) {
    // console.log(Props.display)
    return(
    <div className={`confetti ${Props.display?"visible":"invisible"}`}>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>
        <div className={`confetti-piece`}></div>

    </div>
    );
  }
export default Celebration;