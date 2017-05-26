(() => {
  let e=this;
  const どをラジアンに=3.1415926535897932384626/180;
  
  // Cleanup function when the extension is unloaded
  e._shutdown = ()=>{};

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  e._getStatus = ()=>{
    return {status: 2, msg: 'Ready'};
  };

  e.ランダムにまつ = (コールバック) => {
    let まつじかん = Math.random();
    //console.log('Waiting for ' + wait + ' seconds');
    window.setTimeout(()=>{
      コールバック();
    }, まつじかん*1000);
  };

  e.ばしょとかめをつくる=
    (xざひょう,yざひょう,むき)=>{
      return {ばしょ: 0, かめ: {いち:[xざひょう,yざひょう],むき:むき}};
    };
  
  e.かめのx=(かめ)=>{return かめ.かめ.いち[0];};

  e.かめのy=(かめ)=>{return かめ.かめ.いち[1];};

  e.かめのむき=(かめ)=>{return かめ.かめ.むき;};
  
  e.すすむ=(きょり,かめ)=>{
    let むき=e.かめのむき(かめ);
    let あたらしいx=e.かめのx(かめ)+きょり*Math.cos(むき*どをラジアンに);
    let あたらしいy=e.かめのy(かめ)+きょり*Math.sin(むき*どをラジアンに);
    return e.ばしょとかめをつくる(あたらしいx,あたらしいy,むき);
  };

  e.左にまわす=(かくど,かめ)=>{
    return e.ばしょとかめをつくる(
      e.かめのx(かめ),e.かめのy(かめ),e.かめのむき(かめ)+かくど);
  };
    
  
  // Block and block menu descriptions
  let descriptor = {
    blocks: [
      // Block type, block name, function name
      ['r', 'かめ x:%n , y:%n, むき:%n', 'ばしょとかめをつくる', 0,0,90],
      ['r', '%s のxざひょう', 'かめのx', 'かめ'],
      ['r', '%s のyざひょう', 'かめのy', 'かめ'],
      ['r', '%s のむき', 'かめのむき', 'かめ'],
      ['r', '%n ぽ %s をすすめたかめ', 'すすむ', 'きょり','かめ'],
      ['r', '%n ど %s を左にまわしたかめ', '左にまわす', 'かくど','かめ'],
      //['w', 'my first block', 'my_first_block'],
      //['w', 'my first block', 'wait_random'],
      //['w', 'ランダムにまつ', 'ランダムにまつ'],
    ]
  };
  
  // Register the extension
  ScratchExtensions.register('My first extension', descriptor, e);
})();

