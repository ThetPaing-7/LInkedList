import LinkListed from "./main.js"

let player = new LinkListed(2,3)

test('Test One',()=>{

    expect(player.add()).toBe(5)
})