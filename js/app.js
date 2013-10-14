(function () {
    var canvas = document.getElementById('main')
      , ctx = canvas.getContext('2d')
     ctx.canvas.width = window.innerWidth
     ctx.canvas.height = window.innerHeight
     ctx.fillStyle = '#ffffff'
     ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
})()
