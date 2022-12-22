module.exports = {

    posts: [
        {   
            id: "Wesley Martins",
            title: "Teste do mural",
            description: "Descricao do mural"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description});
    }

}

//criando ID sem banco de dados
function generateID(){
    return Math.random().toString(36).substring(2, 9);
}