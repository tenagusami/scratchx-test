(() => {
  let ext=this;
  
  // Cleanup function when the extension is unloaded
  ext._shutdown = ()=>{};

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  ext._getStatus = ()=>{
    return {status: 2, msg: 'Ready'};
  };

  ext.べきじょう = (てい, しすう) => {
    return Math.pow(てい, しすう);
  };

  ext.ランダムにまつ = (コールバック) => {
    let まつじかん = Math.random();
    //console.log('Waiting for ' + wait + ' seconds');
    window.setTimeout(()=>{
      コールバック();
    }, まつじかん*1000);
  };

  // Block and block menu descriptions
  let descriptor = {
    blocks: [
      // Block type, block name, function name
      ['r', '%n ^ %n', 'べきじょう', 2, 3],
      //['w', 'my first block', 'my_first_block'],
      //['w', 'my first block', 'wait_random'],
      ['w', 'ランダムにまつ', 'ランダムにまつ'],
    ]
  };

  // Register the extension
  ScratchExtensions.register('My first extension', descriptor, ext);
})();
