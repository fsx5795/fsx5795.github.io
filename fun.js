var gitalk = new Gitalk({
    clientID: 'Iv1.8e2b7cb55ce2679e',
    clientSecret: 'ad1abaed48da8536fa025c009eddafdacbd5fea6',
    repo: 'https://github.com/fsx5795/gitalk-comments',
    owner: 'fsx5795',
    admin:  ['fsx5795'],
    id: location.pathname,
    language:'zh-CN',
    distractionFreeMode: false
})
gitalk.render('gitalk-container')