import { NodeProps } from "@xyflow/react";
import { EventNodeType } from "../Node.types";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./EventNode.scss";

const EventNode = ({ id, data }: NodeProps<EventNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            {/* <p className="node__text">settings required...</p> */}

            {data.selectedEventLabel && (
                <div>
                    <span className="wait-node__title">{data.selectedEventLabel} </span>

                    {data.inputValues &&
                        Object.entries(data.inputValues).map(([id, value]) => {
                            if (typeof value === "string") {
                                return <Chip key={id} label={value} size="small" sx={{ margin: "5px" }} />;
                            }

                            if (typeof value === "object") {
                                return Object.entries(value).map(([id, valueItem]) => (
                                    <Chip key={id} label={valueItem} size="small" sx={{ margin: "5px" }} />
                                ));
                            }
                        })}
                </div>
            )}
        </NodeWrapper>
    );
};

export default EventNode;
