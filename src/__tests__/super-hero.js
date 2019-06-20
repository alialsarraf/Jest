import {getFly} from '../super-hero'

test('manual sn ', ()=>{
const fly = getFly();
console.log(fly);
expect(fly).toEqual([
    { name: 'Ali', powers:['test', 'test1']},    
    ])
})