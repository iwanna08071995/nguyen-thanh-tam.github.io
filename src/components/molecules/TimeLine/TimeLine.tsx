import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";

import TitleContent from "@/components/atoms/TitleContent";
import { Timeline as TimelineAnt } from "antd";
import { checkArrayNotEmpty } from "@/utils/helpers";
import { timeLine, showItemTimeLineFunc } from "@/interfaces";

import TimeLineStyled from "./TimeLineStyled";

function TimeLine(props: timeLine) {
  const { title, timeList } = props;

  const showItem: showItemTimeLineFunc = (params) => {
    const { position, time, name } = params;

    return (
      <div className="tw-flex tw-flex-col">
        <span>{time}</span>
        <span>{position}</span>
        <span>{name}</span>
      </div>
    );
  };

  const showLists = () => {
    const list: any[] = [];

    if (checkArrayNotEmpty(timeList)) {
      timeList.map((value, index) => {
        if (index < timeList.length - 1) {
          list.push({
            color: "black",
            dot: <MdOutlineDoneOutline />,
            children: <p>Custom color testing</p>,
          });
        } else {
          list.push({
            key: index,
            color: "black",
            dot: <MdOutlineDoneOutline size="0.8rem" />,
            children: showItem(value),
          });
        }
      });
    }
    return list;
  };

  return (
    <TimeLineStyled>
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <TimelineAnt items={showLists()} />
    </TimeLineStyled>
  );
}

export default TimeLine;
