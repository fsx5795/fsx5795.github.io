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
                if (
                    tt[k] == 'cat'
                    || tt[k] == 'cd'
                    || tt[k] == 'curl'
                    || tt[k] == 'git'
                    || tt[k] == 'ls'
                    || tt[k] == 'man'
                    || tt[k] == 'rm'
                    || tt[k] == 'service'
                    || tt[k] == 'sudo'
                    || tt[k] == 'touch'
                    || tt[k] == 'vi'
                    || tt[k] == 'vim'
                    || tt[k] == 'vim'
                    || tt[k] == 'vim'
                    || tt[k] == 'vim'
                    || tt[k] == 'vim'
                    ) {
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
                if (tt[k] == 'true' || tt[k] == 'false' || tt[k] == 'on' || tt[k] == 'off') {
                    tt[k] = '<code class="vle">' + tt[k] + '</code>';
                }
                if (tt[k].indexOf('[') == 0) {
                    tt[k] = '<code class="opt">' + tt[k];
                }
                if (tt[k].indexOf(']') == tt[k].length - 1) {
                    tt[k] = tt[k] + '</code>';
                }
            }
            t[j] = tt.join(' ');
        };
        divs[i].innerHTML = t.join('\n');
    }
}
shell_style();

