import React, { Component } from "react";
import marked from "marked";
import ContainerText from "./ContainerText";
import "./App.scss";
import Toolbar from "./Toolbar";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

type AppProps = {};
type AppState = {
    content: string;
};

export class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            content: placeholder,
        };
        this.handleChange = this.handleChange.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
    }

    handleChange = (e: any): void => {
        e.preventDefault();
        this.setState({
            content: e.currentTarget.value,
        });
    };

    createMarkup = (): any => {
        return { __html: marked(this.state.content, { sanitize: true }) };
    };

    render() {
        return (
            <div id="app">
                <div className="container-editor">
                    <Toolbar toolbarId="tool-editor" title="Editor" />
                    <ContainerText
                        textId="editor"
                        content={this.state.content}
                        isMarked={false}
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="container-preview">
                    <Toolbar toolbarId="tool-preview" title="Previewer" />
                    <ContainerText
                        textId="preview"
                        content={this.createMarkup()}
                        isMarked={true}
                    />
                </div>
            </div>
        );
    }
}

export default App;
