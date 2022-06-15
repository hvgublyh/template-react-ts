import React, { } from "react";
import { Button } from "antd"

type PageProps = {
  value: number;
  setValue: (value: number) => void;
}
function page1({ value, setValue }: PageProps) {
  return (
    <div>
      <Button onClick={() => setValue(value + 1)}>我是antd某个按钮</Button>
    </div>
  )
}

export default page1