import { sidebarItems, sidebarItem } from "../../constants/sidebarItems";
import SidebarItem from "./SidebarItem";

import "./Sidebar.scss";

const Sidebar = () => {
    const onDragStart = (e: React.DragEvent, item: sidebarItem) => {
        console.log();
        e.dataTransfer.setData("application/reactflow", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    };

    const renderItemList = (sidebarItems: sidebarItem[]) =>
        sidebarItems.map((item: sidebarItem) => <SidebarItem key={item.id} item={item} onDragStart={onDragStart} />);

    const elements = renderItemList(sidebarItems);
    return <div className="sidebar-wrapper">{elements}</div>;
};

export default Sidebar;
