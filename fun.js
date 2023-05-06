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