/**
 * Created by Administrator on 2017/4/18.
 */
var lis = document.getElementById('news').getElementsByTagName('li'),
    con = document.getElementById('con').getElementsByTagName('p');
    for(var i = 0;i<lis.length;i++) {
        lis[i].index = i;
        console.log(lis[i].index);
        lis[i].onclick = function () {
            for(var j = 0;j<con.length;j++) {
                con[j].style.display = 'none';
                lis[j].style.background = '';
                // lis[j].style.background = 'red';
            }
            con[this.index].style.display = 'block';
            lis[this.index].style.background = 'red';
        }
    }