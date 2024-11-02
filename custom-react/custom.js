const container=document.getElementById("root");
const reactelement={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_parent"
    },
    content:"click me to visit google"
};
function customreact(container,reactelement){
    const embed=document.createElement(reactelement.type);
    for(let prop in reactelement.props){
        embed.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(embed);
}
customreact(container,reactelement);