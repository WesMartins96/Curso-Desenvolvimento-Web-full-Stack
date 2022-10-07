/**
 * Tratamento de erros usa-se Try Catch
 */

let nome = "";

try {
    // tratar para se caso o nome for vazio, dar erro pois nao é aceito vazio
    if (nome == "") {
        throw "o nome não pode ser vazio";
    }

    console.log(nome);
} catch (error) {
    //Para tratar o erro se caso nao tiver variavel no console.log
    console.log("Houve um erro", error);
} finally{
    console.log("Boa Noite");
}

