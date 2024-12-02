import { ISidebarItem } from "./SidebarItem.types";

import "./SidebarItem.scss";

const SidebarItem = ({
    item,
    onDragStart,
}: {
    item: ISidebarItem;
    onDragStart: (e: React.DragEvent, item: ISidebarItem) => void;
}) => {
    // console.log(item, "SidebarItem");
    return (
        <div className="sidebar-item__wrapper">
            <div className="sidebar-item" draggable onDragStart={(e) => onDragStart(e, item)}>
                {item.icon}
                <p className="sidebar-item__label">{item.data.label}</p>
            </div>
        </div>
    );
};

export default SidebarItem;
