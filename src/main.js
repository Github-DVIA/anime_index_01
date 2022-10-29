var $ = mdui.$;


var inst = new mdui.Drawer('#drawer');

// method
$('#toggle').on('click', function () {
  inst.toggle();
});