import React from "react";
import { SiFreecodecamp } from "react-icons/si";
import { FaExpandArrowsAlt } from "react-icons/fa";
type propsToolbar = {
    toolbarId:string;
    title: string;
};

function Toolbar(props: propsToolbar) {
    return (
        <div id={props.toolbarId}>
            <SiFreecodecamp className="icons" />
            <div className="title">{props.title}</div>
            <FaExpandArrowsAlt className="icons" />
        </div>
    );
}

export default Toolbar;
