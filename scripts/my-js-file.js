var list = document.createElement('ul'); //通过指定名称创建一个元素。
var info = document.createElement('p');
var html = document.querySelector('html');  //返回文档中匹配指定选择器的第一个元素。

//设置节点的文本内容
info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';


//把该元素节点添加到body元素节点中成为其子节点，但是放在body的现有子节点的最后。
document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    var listItem = document.createElement('li');
    var listContent = prompt('What content do you want the list item to have');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        var listContent = prompt('Enter new content for your list item');
        this.textContent = listContent;
    }
}