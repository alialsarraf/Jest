const superHeroes = [
{ name: 'Ali', powers:['test', 'test1']},
{ name: 'Ali2', powers:['hello', 'test1']},
]

function getFly(){
    return superHeroes.filter(hero =>{
        return hero.powers.includes('test')
    })
}

export {getFly}