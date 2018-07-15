import React from "react";
import sum from "lodash/sum";
import round from "lodash/round";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

const average = data => round(sum(data) / data.length);

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </div>
  );
};
