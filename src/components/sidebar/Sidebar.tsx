import { SidebarItem, sidebarItems } from "../../constants/sidebarItems";
import SidebarItems from "./SidebarItem";

import "./Sidebar.scss";

const Sidebar = () => {
    const onDragStart = (e: React.DragEvent, item: SidebarItem) => {
        // console.log(item, "onDragStart");
        e.dataTransfer.setData("application/reactflow", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    };

    const renderItemList = (sidebarItems: SidebarItem[]) =>
        sidebarItems.map((item: SidebarItem) => <SidebarItems key={item.id} item={item} onDragStart={onDragStart} />);

    const elements = renderItemList(sidebarItems);
    return <div className="sidebar-wrapper">{elements}</div>;
};

export default Sidebar;
