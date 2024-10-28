import { IBtn, MessageNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";
import ButtonNode from "./ButtonNode";

import "./MessageNode.scss";

const MessageNode = ({ id, data }: NodeProps<MessageNodeType>) => {
    const renderBtns = (btns: IBtn[]) => {
        if (!data.buttons || data.buttons.length === 0) {
            return null;
        }
        return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} isHandle={true} />);
    };
    const btns = data.buttons && renderBtns(data.buttons);

    return (
        <NodeWrapper id={id} data={data} handle="all">
            <p className="message-node__text">{data.text}</p>
            {btns && <div className="message-node__btns">{btns}</div>}
        </NodeWrapper>
    );
};

export default MessageNode;
