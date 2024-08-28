class Character {
    #life
    constructor(name) {
        this.name = name 
        this.#life = 1 
        this.maxlife = 1 
        this.atack = 0 
        this.defense = 0 
    }
    //para pegar a vida do char
    get life(){
        return this.#life
    }
    //para enviar a nova vida do char
    //veriicação
    set life(newLife){
        this.#life = newlife <0 ? 0 : newlife

    }
}