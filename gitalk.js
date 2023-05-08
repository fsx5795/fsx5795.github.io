/*
var gitalk = new Gitalk({
    clientID: '3140869e5d8332db122f',
    clientSecret: '250144707f64f5cc3da9e593bb8e2a98e2293cf5',
    repo: 'gitalk-comments',
    owner: 'fsx5795',
    admin:  ['fsx5795'],
    id: location.pathname,
    language:'zh-CN',
    distractionFreeMode: false
})
gitalk.render('gitalk-container')
*/
function shell_style() {
    //debugger
    var divs = document.getElementsByClassName("shell");
    for (var i = 0; i < divs.length; ++i) {
        var text = divs[i].innerText;
        let t = text.split('\n');
        for (var j = 0; j < t.length; ++j) {
            if (t[j].indexOf('#') == 0) {
                t[j] = '<code class="note">' + t[j] + '</code>';
                continue;
            }
            let tt = t[j].split(' ');
            for (var k in tt) {
                if (tt[k] == 'git' || tt[k] == 'sudo' || tt[k] == 'curl' || tt[k] == 'cd') {
                    tt[k] = '<code class="cls">git</code>';
                }
                if (tt[k].indexOf('-') == 0) {
                    tt[k] = '<code class="line">' + tt[k] + '</code>';
                }
                if (tt[k].indexOf('http://') == 0 || tt[k].indexOf('https://') == 0) {
                    tt[k] = '<code class="hp">' + tt[k] + '</code>';
                }
                if (tt[k].indexOf('"') == 0 && tt[k].lastIndexOf('"') == tt[k].length - 1 || tt[k].indexOf('\'') == 0 && tt[k].lastIndexOf('\'') == tt[k].length - 1) {
                    tt[k] = '<code class="str">' + tt[k] + '</code>';
                }
                if (tt[k] == 'true' || tt[k] == 'false') {
                    tt[k] = '<code class="vle">' + tt[k] + '</code>';
                }
                if (tt[k] == 'config' || tt[k] == 'init' || tt[k] == 'add' || tt[k] == 'commit' || tt[k] == 'push' || tt[k] == 'pull' || tt[k] == 'rm' || tt[k] == 'remote') {
                    tt[k] = '<code class="opt">' + tt[k] + '</code>';
                }
            }
            t[j] = tt.join(' ');
        };
        divs[i].innerHTML = t.join('\n');
    }
}
shell_style();

