import { IBtn, ImmediatelyNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";
import ButtonNode from "./ButtonNode";

import "./ImmediatelyNode.scss";

const ImmediatelyNode = ({ id, data }: NodeProps<ImmediatelyNodeType>) => {
    const renderBtns = (btns: IBtn[]) => {
        if (!data.buttons || data.buttons.length === 0) {
            return null;
        }
        return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} isHandle={true} />);
    };
    const btns = data.buttons && renderBtns(data.buttons);

    return (
        <NodeWrapper id={id} data={data} handle="right">
            <p className="message-node__text">{data.text}</p>
            {btns && <div className="message-node__btns">{btns}</div>}
        </NodeWrapper>
    );
};

export default ImmediatelyNode;
