//criar a estrutura de um objeto


class Item {

    //Variavel de classe, ela não faz parte do objeto mas sim da classe;
    static lastId = 0;

    construtor(text) {
        this.id = Item.lastId++
        this.text = text;
        this.done = false;

    }
}

export default Item;