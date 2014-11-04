var args = arguments[0] || {};

$.view1.addEventListener('click', function(e) {
	var quiz = Alloy.createController('quiz');
	OS_ANDROID ? quiz.getTopLevelViews()[0].open() : args.index.openWindow(quiz.getTopLevelViews()[0]);
});