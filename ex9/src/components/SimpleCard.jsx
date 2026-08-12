import Description from "./Description";
import Title from "./Title";
import Image from "./Image";

function SimpleCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Image />
        </div>
        <div className="col-9">
          <div>
            <Title />
          </div>
          <div>
            <Description />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SimpleCard;
