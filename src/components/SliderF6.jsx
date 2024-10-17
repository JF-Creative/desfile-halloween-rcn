import "./css/slider.css";

const formula7 = {
  logo1: "l1.png",
  logo2: "l2.png",
  logo3: "l3.png",
  logo4: "l4.png",
  logo5: "l5.png",
  logo6: "l6.png",
  logo7: "l7.png",
  logo8: "l8.png",
};

export default function SliderF6() {
  return (
    <div className="slider">
      <div className="list">
        {Object.entries(formula7).map(([key, value], index) => (
          <div className="item" key={key} style={{ "--position": index + 1 }}>
            <img src={value} alt={key} />
          </div>
        ))}
      </div>
    </div>
  );
}
