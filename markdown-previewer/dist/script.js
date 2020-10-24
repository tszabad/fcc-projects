class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder };

    this.handleChange = this.handleChange.bind(this);
    this.markDown = this.markDown.bind(this);

  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  markDown(text) {
    const markedString = marked(text);
    return { __html: markedString };
  }

  render() {

    return (
      React.createElement("div", { className: "center-block container" },
      React.createElement("h1", { className: "text-center display-1" }, "FCC Markdown Previewer"),
      React.createElement("div", { className: "col-xs-6" },
      React.createElement("div", { className: "card bg-light mb-3" },
      React.createElement("h3", { className: "text-center display-4 card-header" }, "Input text"),
      React.createElement("div", { className: " card-body border text-left" },
      React.createElement("div", null,
      React.createElement("textarea", { id: "editor", className: "form-control", rows: "30",
        value: this.state.text,
        text: this.state.text,
        onChange: this.handleChange }))))),









      React.createElement("div", { className: "col-xs-6" },
      React.createElement("div", { className: "card bg-light mb-3" },
      React.createElement("h3", { className: "text-center display-4 card-header" }, "Markdown Output"),

      React.createElement("div", { className: " card card-body border text-left" },
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.markDown(this.state.text) })))),

      React.createElement("div", { class: "text-center", id: "footer-below" }, "TOM \xA9", React.createElement("br", null),

      document.write(new Date().getFullYear()), ". ",
      React.createElement("br", null), "All Rights Reversed")));





  }}

const placeholder =
`# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


ReactDOM.render(React.createElement(Markdown, null), document.getElementById("root"));