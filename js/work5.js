/**
 * Created by Administrator on 2017/4/18.
 */
var lis = document.getElementById('nav').getElementsByTagName('li'),
    con = document.getElementById('con').getElementsByTagName('p');
for(var i = 0;i<lis.length;i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        for(var j = 0;j<con.length;j++) {
            con[j].style.display = 'none';
        }
        con[this.index].style.display = 'block';
    }
}