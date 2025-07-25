function someThing(users){
    for(let user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
}
}

someThing([
    {id: 1, name: 'Chip', age: 30},
    {id: 2, name: 'Dale', age: 25}, 
    {id: 3, name: 'Myxa', age: 40}
]);