function usernames(names){
    const sortedNames = names
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);

    const mySet = new Set(sortedNames);
    mySet.forEach(x => console.log(x));
}

(usernames(
    ['Ashton',
     'Kutcher',
     'Ariel',
     'Lilly',
     'Keyden',
     'Aizen',
     'Billy',
     'Braston']
))