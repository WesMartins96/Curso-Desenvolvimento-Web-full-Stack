const root = document.querySelector("#root");

// aqui já estamos usando ReactJS
const element1 = React.createElement("h1", {id: "Titulo Principal"}, "Hello World");

const element2 = React.createElement("h4", {id: "Titulo complementar"}, "Subtitulo");

const headline = React.createElement("div", null, element1, element2)

//para mostrar algo na tela criado com ReactJS
ReactDOM.render(headline, root);
