//(function (ext) {
(() => {
    let ext=this;
    
    // Cleanup function when the extension is unloaded
    ext._shutdown = ()=>{};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = ()=>{
        return {status: 2, msg: 'Ready'};
    };

    ext.power = (base, exponent) => {
        return Math.pow(base, exponent);
    };

    ext.wait_random = (callback) => {
        let wait = Math.random();
        //console.log('Waiting for ' + wait + ' seconds');
        window.setTimeout(function() {
            callback();
        }, wait*1000);
    };

    // Block and block menu descriptions
    let descriptor = {
        blocks: [
            // Block type, block name, function name
            ['r', '%n ^ %n', 'power', 2, 3],
	    //['w', 'my first block', 'my_first_block'],
	    //['w', 'my first block', 'wait_random'],
	    ['w', 'wait for random time', 'wait_random'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})();
