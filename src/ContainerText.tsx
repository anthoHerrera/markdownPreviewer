import React from "react";

type propsContainerText = {
    textId: string;
    content: any;
    isMarked: boolean;
    handleChange?: (e: any) => void;
};

function ContainerText(props: propsContainerText) {
    if (props.isMarked) {
        return (
            <div
                dangerouslySetInnerHTML={props.content}
                id={props.textId}
            ></div>
        );
    } else {
        return (
            <textarea
                id={props.textId}
                value={props.content}
                onChange={props.handleChange}
            ></textarea>
        );
    }
}

export default ContainerText;
