function job_app(tp) {
    // return 'it works';
    let x = [];
    x += tp.system.prompt("prompt 1");
    x += tp.system.prompt("prompt 2");
    x += tp.system.prompt("prompt 3");
    return x;
}

module.exports = job_app;