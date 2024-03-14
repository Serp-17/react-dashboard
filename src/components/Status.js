import React from "react";
import {statusData} from "../data/status";
import {Badge} from "@themesberg/react-bootstrap";


export default ({ status }) => {
    const data = statusData.find(el => el.id === status);

    return <Badge className="font-small" bg={data.style}>{data.title}</Badge>

}
