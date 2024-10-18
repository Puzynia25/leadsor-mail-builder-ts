// import ButtonNode from "../components/ButtonNode";
import { IMessageNodeContent } from "../customNode/nodesContent.types";

import "./MessageNodeContent.scss";

const text: string = "Type your message";

const MessageNodeContent = (): IMessageNodeContent => {
    // const renderBtns = (btns) => {
    //     if (!data.buttons || data.buttons.length === 0) {
    //         return null;
    //     }
    //     return btns.map((btn) => <ButtonNode key={btn.id} btn={btn} />);
    // };
    // const btns = renderBtns(data.buttons);

    return {
        color: "#2b7e2f",
        text,
        render: (
            <div className="message-content__wrapper">
                <p className="message-content__text">{text}</p>
                {/* {btns && (
                        <Box display="flex" flexDirection="column" rowGap={1} paddingTop={2}>
                            {btns}
                        </Box>
                    )} */}
            </div>
        ),
    };
};

export default MessageNodeContent;
