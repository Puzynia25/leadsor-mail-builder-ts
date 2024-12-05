import { ISidebarItem } from "./SidebarItem.types";
import * as Icons from "@mui/icons-material";

import "./SidebarItem.scss";

const SidebarItem = ({
    item,
    onDragStart,
}: {
    item: ISidebarItem;
    onDragStart: (e: React.DragEvent, item: ISidebarItem) => void;
}) => {
    // console.log(item, "SidebarItem");
    const IconComponent = item.data.icon && Icons[item.data.icon as keyof typeof Icons];

    return (
        <div className="sidebar-item__wrapper">
            <div className="sidebar-item" draggable onDragStart={(e) => onDragStart(e, item)}>
                <div>{IconComponent ? <IconComponent fontSize="large" sx={{ color: item.data.color }} /> : null}</div>

                <p className="sidebar-item__label">{item.data.label}</p>
            </div>
        </div>
    );
};

export default SidebarItem;
