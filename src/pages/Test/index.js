import {Button, Progress} from "antd";
import {useState} from "react";

const Test = () => {
    const [percent, setPercent] = useState(0);
    const handleClick = () => {
        setPercent(percent + 1)
    }

    return (
        <div>
            <Progress percent={percent} />
            <Button onClick={handleClick}>click</Button>
        </div>
    )
}

export default Test;