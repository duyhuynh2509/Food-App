export const foods = [
    {id:'1',title:'Bánh canh cua',picture: require('./images/banhcanhcua.jpg'),cost:25.000},
    {id:'2',title:'Cơm gà',picture: require('./images/comga.jpg'),cost:25.000},
    {id:'3',title:'Bún rạm Phù Mỹ',picture: require('./images/bunram.jpg'),cost:15.000},
     {id:'4',title:'Bún đậu mắm tôm',picture: require('./images/bundau.jpg'),cost:35.000},
    {id:'5',title:'Chả giò',picture: require('./images/chagio.jpg'),cost:20.000},
    {id:'6',title:'Bún thịt nướng',picture: require('./images/bunthitnuong.jpg'),cost:15.000},
    {id:'7',title:'Cháo gà',picture: require('./images/chaoga.jpg'),cost:30.000}
]
export const getFoods = ()=>{
    return foods;
}