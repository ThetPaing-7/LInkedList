export default class LinkListed{

    #nodes = {
        data: null,
        nextpointer : null
    }

    constructor(value, pointer = null){
        this.value = value
        this.pointer = pointer
    }


}
