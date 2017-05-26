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

  ext.リストをかえすテスト=(x1,x2)=>{
    return [x1,x2,[x1,x2]];
  };

  ext.オブジェクトをかえすテスト=(x1,x2)=>{
    return {test1:x1,test2:x2};
  };
  
  ext.リストをよむテスト=(リスト)=>{
    return リスト[2];
  };

  ext.オブジェクトをよむテスト=(オブジェクト)=>{
    return オブジェクト.test1;
  };

  // Block and block menu descriptions
  let descriptor = {
    blocks: [
      // Block type, block name, function name
      ['r', '%n ^ %n', 'べきじょう', 2, 3],
      ['r', '%n , %n', 'リストをかえすテスト', 2, 3],
      ['r', '%s をよむ', 'リストをよむテスト', 'a'],
      ['r', '{ %n , %n }', 'オブジェクトをかえすテスト', 2,3],
      ['r', '%s .test1', 'オブジェクトをよむテスト', ''],
      //['w', 'my first block', 'my_first_block'],
      //['w', 'my first block', 'wait_random'],
      //['w', 'ランダムにまつ', 'ランダムにまつ'],
    ]
  };
  
  // Register the extension
  ScratchExtensions.register('My first extension', descriptor, ext);
})();

