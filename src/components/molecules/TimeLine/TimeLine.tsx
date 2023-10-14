import React from "react";
import { BsCheck2, BsPersonWorkspace } from "react-icons/bs";

import TitleContent from "@/components/atoms/TitleContent";
import { Timeline as TimelineAnt } from "antd";
import { checkArrayNotEmpty } from "@/utils/helpers";
import {
  timeLineProps,
  listItemTimeLineFunc,
  listProjectFunc,
  projectExperienceProps,
  descriptionJobFunc,
} from "@/interfaces";

import TimeLineStyled from "./TimeLineStyled";
import Lists from "@/components/atoms/Lists";

function TimeLine(props: timeLineProps) {
  const { title, timeList, isExperience = false } = props;

  const showDescriptionJob: descriptionJobFunc = (title, content) => {
    return (
      <div>
        <span className="tw-font-bold tw-mr-2">• {title}:</span>
        <span>{content}</span>
      </div>
    );
  };

  const showListProject: listProjectFunc = (params) => {
    const list: any[] = [];

    if (checkArrayNotEmpty(params)) {
      params.map((value: projectExperienceProps, index) => {
        const { name, teamSize, description, technologies, responsibilities } =
          value;

        list.push(
          <div key={index}>
            <span className="tw-font-bold tw-mr-2">+ Dự án:</span>
            <span className="tw-text-xl">{name} </span>
            <span>({teamSize})</span>
            <div className="tw-flex tw-flex-col tw-ml-4">
              {showDescriptionJob("Miêu tả", description)}
              {showDescriptionJob("Công nghệ", technologies)}
              {showDescriptionJob(
                "Công việc",
                <Lists
                  className="tw-ml-10"
                  type="circle"
                  content={responsibilities ? responsibilities : []}
                />
              )}
            </div>
          </div>
        );
      });
    }
    return list;
  };

  const showItemExperience: listItemTimeLineFunc = (params) => {
    const {
      time,
      company,
      position,
      project, //: { name, teamSize, description, technologies, responsibilities },
    } = params;

    return (
      <div className="tw-flex tw-flex-col">
        <div className="tw-flex tw-flex-row">
          <span className="tw-font-bold tw-mr-2">Công ty:</span>
          <span className="tw-text-xl tw-mr-2">{company}</span>
          <span>
            - {position} ( {time} )
          </span>
        </div>
        {showListProject(project as object[])}
      </div>
    );
  };

  const showItemDefult: listItemTimeLineFunc = (params) => {
    const { position, time, name } = params;

    return (
      <div className="tw-flex tw-flex-col">
        <span>{time}</span>
        <span className="tw-font-bold">{position}</span>
        <span>{name}</span>
      </div>
    );
  };

  const handleShowItem: listItemTimeLineFunc = (params) => {
    if (isExperience) {
      return showItemExperience(params);
    }

    return showItemDefult(params);
  };

  const handleShowList = () => {
    const list: any[] = [];

    if (checkArrayNotEmpty(timeList)) {
      timeList.map((value, index) => {
        if (index < timeList.length - 1) {
          list.push({
            key: index,
            color: "black",
            dot: <BsPersonWorkspace size="1rem" />,
            children: handleShowItem(value),
          });
        } else {
          list.push({
            key: index,
            color: "black",
            dot: <BsCheck2 size="1rem" />,
            children: handleShowItem(value),
          });
        }
      });
    }
    return list;
  };

  return (
    <TimeLineStyled className="tw-w-full">
      <div className="tw-mb-4">
        <TitleContent title={title} />
      </div>
      <TimelineAnt items={handleShowList()} />
    </TimeLineStyled>
  );
}

export default TimeLine;
