export default function Cube() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <h2>sOme Text</h2>
      <div className="container">
        <div className="cube-container">
          <div className="cube cube1">
            <div className="box box1 front">Front</div>
            <div className="box box1 right">Right</div>
            <div className="box box1 top">Top</div>
            <div className="box box1 bottom">Bottom</div>
            <div className="box box1 left">Left</div>
            <div className="box box1 back">Back</div>
          </div>
          {/* <div className="cube cube2">
            <div className="box box2 front">Front</div>
            <div className="box box2 back">Back</div>
            <div className="box box2 top">Top</div>
            <div className="box box2 bottom">Bottom</div>
            <div className="box box2 left">Left</div>
            <div className="box box2 right">Right</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
