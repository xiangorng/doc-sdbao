window.$docsify = {
  loadSidebar: true,
  loadNavbar: true,
  maxLevel: 3,
  subMaxLevel: 2,
  logo: './assets/favicon.ico',
  auto2top: true,
  name: '水滴保,保你省',
  search: {
    placeholder: 'Type to search',
    noData: 'No Results!',
    paths: 'auto',
    depth: 2,
    maxAge: 86400000, // 1 day
    hideOtherSidebarContent: false
  },
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(html) {
        return (
          html +
          `\n\n----\n\n` +
          '联系: <a href="mailto:renchenggong@shuidihuzhu.com;xuyangtao@shuidihuzhu.com;liupeipeng@shuidihuzhu.com">邮件联系</a> <a href="https://github.com/ShuiDi-Inc/doc.sdbao/issues">在线提交问题</a>'
        )
      })
    }
  ]
}
function addWaterMarker(str, ele = document.body) {
  var can = document.createElement('canvas')
  ele.appendChild(can)
  can.width = 260 //画布的宽
  can.height = 320 //画布的高度
  can.style.display = 'none'
  var cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180) //画布里面文字的旋转角度
  cans.font = '16px Microsoft JhengHei' //画布里面文字的字体
  cans.fillStyle = 'rgba(17, 17, 17, 0.50)' //画布里面文字的颜色
  cans.textAlign = 'left' //画布里面文字的水平位置
  cans.textBaseline = 'Middle' //画布里面文字的垂直位置
  cans.fillText(str, can.width / 3, can.height / 2) //画布里面文字的间距比例
  ele.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

window.onload = function() {
  addWaterMarker('水滴保险商城')
}
