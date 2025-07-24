let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write('<li>' + listOfItems[i] + '</li>');
}
document.write('</ul>');