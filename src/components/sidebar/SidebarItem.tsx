import { FC } from "react";
import { SidebarItem } from "../../constants/sidebarItems";
// import useNode from "../../hooks/useNode";

import "./SidebarItem.scss";

const SidebarItems: FC<{ item: SidebarItem; onDragStart: (e: React.DragEvent, item: SidebarItem) => void }> = ({
    item,
    onDragStart,
}) => {
    console.log(item, "SidebarItems");
    return (
        <div className="sidebar-item-wrapper">
            <div className="sidebar-item" draggable onDragStart={(e) => onDragStart(e, item)}>
                {item.icon}
                <p>{item.label}</p>
            </div>
        </div>
    );
};

export default SidebarItems;
