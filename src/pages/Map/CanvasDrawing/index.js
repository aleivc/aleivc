import { useEffect, useRef, useState } from "react";
import { Collapse, Slider } from "antd";
import { fabric } from "fabric";
import { Colorpicker } from "antd-colorpicker";
const { Panel } = Collapse;

const CanvasDrawing = () => {
  const fabricRef = useRef(null);
  const canvasRef = useRef(null);
  const uploadRef = useRef(null);

  let isDown = false;
  let line;
  let strokeWidth = 2;

  const startP = [];
  const endP = [];
  const [imgUrl, setUrl] = useState("");

  useEffect(() => {
    fabricRef.current = new fabric.Canvas(canvasRef.current, {
      selection: false,
      hoverCursor: "pointer",
    });

    fabricRef.current.on("mouse:down", function (o) {
      isDown = true;
      let pointer = fabricRef.current.getPointer(o.e);
      let points = [pointer.x, pointer.y, pointer.x, pointer.y];

      startP.push({ x: pointer.x, y: pointer.y });

      line = new fabric.Line(points, {
        strokeWidth: strokeWidth,
        fill: "red",
        stroke: "red",
      });

      fabricRef.current.add(line);
    });

    fabricRef.current.on("mouse:move", function (o) {
      if (!isDown) return;
      let pointer = fabricRef.current.getPointer(o.e);
      line.set({ x2: pointer.x, y2: pointer.y });
      fabricRef.current.renderAll();
    });

    fabricRef.current.on("mouse:up", function (o) {
      isDown = false;
      let pointer = fabricRef.current.getPointer(o.e);

      endP.push({ x: pointer.x, y: pointer.y });

      let circle = new fabric.Circle({
        radius: strokeWidth,
        stroke: "green",
        strokeWidth: strokeWidth,
        left: startP[startP.length - 1].x - strokeWidth,
        top: startP[startP.length - 1].y - strokeWidth,
        selectable: false,
      });

      let len = startP.length - 1;

      function animateP() {
        circle.animate(
          { left: pointer.x - strokeWidth, top: pointer.y - strokeWidth },
          {
            duration: 1000,
            onChange: function () {
              fabricRef.current.renderAll();
            },
            onComplete: function () {
              even = !even;
              circle.set({
                left: startP[len].x - strokeWidth,
                top: startP[len].y - strokeWidth,
              });
              fabricRef.current.renderAll();
              animate();
            },
          }
        );
      }

      let a = null;

      var even = true;

      function animate() {
        animateP();
        clearTimeout(a);
      }

      a = setTimeout(animate, 1000);

      fabricRef.current.add(circle);
    });

    return () => {
      fabricRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    if (fabricRef.current) {
      fabric.Image.fromURL(imgUrl, function (img) {
        var oImg = img.set({
          left: 0,
          top: 0,
          angle: 0,
          border: "#000",
          stroke: "#F0F0F0", //<-- set this
          strokeWidth: 40, //<-- set this
          hasControls: false,
          selectable: false,
          cursor: "pointer",
        });
        // .scale();
        fabricRef.current.add(oImg).renderAll();
      });
    }
  }, [imgUrl]);

  const upload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setUrl(e.target.result);
    };
    // setUrl("/assets/map.png");
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex">
      <canvas
        width={870}
        height={window.innerHeight}
        style={{ border: "1px solid gray" }}
        ref={canvasRef}
      ></canvas>
      <div className="flex-grow">
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          <Panel header="背景图片" key="1">
            <input
              type="file"
              accept="image/*"
              ref={uploadRef}
              onChange={upload}
            />
          </Panel>
          <Panel header="线条宽度" key="2">
            <br />
            <Slider
              defaultValue={30}
              tooltip={{
                open: true,
              }}
            />
          </Panel>
          <Panel header="线条颜色" key="3">
            {/*<Colorpicker popup />*/}
          </Panel>
          <Panel header="流动点大小" key="3">
            <br />
            <Slider
              defaultValue={30}
              tooltip={{
                open: true,
              }}
            />
          </Panel>
          <Panel header="流动点颜色" key="3"></Panel>
          <Panel header="流动速度" key="3"></Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default CanvasDrawing;
