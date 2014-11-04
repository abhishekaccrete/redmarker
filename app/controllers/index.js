var controller = Alloy.createController('main', $);
var view = controller.getView();
$.mainWin.add(view);
OS_ANDROID ? $.mainWin.open() : $.index.open();
