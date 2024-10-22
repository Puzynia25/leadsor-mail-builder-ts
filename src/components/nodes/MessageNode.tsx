import { IBtn, MessageNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";
import ButtonNode from "./ButtonNode";

import "./MessageNode.scss";

const MessageNode = ({ id, data }: NodeProps<MessageNodeType>) => {
    console.log(data, "MessageNode");

    const renderBtns = (btns: IBtn[]) => {
        if (!data.buttons || data.buttons.length === 0) {
            return null;
        }
        return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} />);
    };
    const btns = data.buttons && renderBtns(data.buttons);

    return (
        <NodeWrapper id={id} data={data}>
            <div className="message-content__wrapper">
                <p className="message-content__text">{data.text}</p>
                {btns && <div className="message-content__btns">{btns}</div>}
            </div>
        </NodeWrapper>
    );
};

export default MessageNode;
