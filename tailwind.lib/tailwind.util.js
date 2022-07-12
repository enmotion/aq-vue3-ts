module.exports = {
  generateAlphaColorStep(color='#FF0000',step=10){
    var props = {};
    for(let i=1 ; i <= step ; i++){
      let stepoffset = (Math.max(Math.round(256/step*i-1),0).toString(16)).toUpperCase();
      props[i] = color + (stepoffset.length<2 ?'0'+stepoffset:stepoffset); // 防止过小的值缺少位数
    };
    return props;
  },
  generateSpacing(minstep=5,maxstep=100,limit=1200){
    var props = {};
    var step = 0;
    for(var i = 0 ; i <= limit ; i += step){
      var step = Math.min(minstep * Math.pow(2,Math.floor(i/maxstep)),maxstep);
      props[i.toString()] = i + 'px';
    }
    return props
  },
  generateStepUint(step=12){
    var props = {};
    for(let i = 0 ;i<=step;i++){
      props[i]=i
    }
    return props
  }
}

