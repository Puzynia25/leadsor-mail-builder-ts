import { FC } from "react";
import { MessageRounded } from "@mui/icons-material";
import { sidebarItem } from "../../constants/sidebarItems";
// import useNode from "../../hooks/useNode";

import "./SidebarItem.scss";

const SidebarItem: FC<{ item: sidebarItem; onDragStart: (e: React.DragEvent, item: sidebarItem) => void }> = ({
    item,
    onDragStart,
}) => {
    // const { icon } = useNode(node.data.label, node.data);
    const icon = <MessageRounded fontSize="large" color="success" />;

    return (
        <div className="sidebar-item-wrapper">
            <div className="sidebar-item" draggable onDragStart={(e) => onDragStart(e, item)}>
                {icon}
                <p>{item.data.label}</p>
            </div>
        </div>
    );
};

export default SidebarItem;
