var args = arguments[0] || {};
Ti.API.info('Argument:' + args);
var data = {
	'correct' : 0,
	'incorrect' : 0
};

function validateAnswer(e) {
	if (e.row.isCorrect) {
		$.viewQuestMain.correct = true;
		var alertDialog = Ti.UI.createAlertDialog({
			title : 'Correct Answer',
			buttonNames : ['Next']
		});
		alertDialog.show();
	} else {
		$.viewQuestMain.correct = false;
		var alertDialog = Ti.UI.createAlertDialog({
			title : 'Incorrect Answer',
			buttonNames : ['Next']
		});
		alertDialog.show();
	}
	alertDialog.addEventListener('click', function(e1) {
		var iCurrentPage = $.viewQuestMain.parent.currentPage;
		var iTotalPages = $.viewQuestMain.parent.views.length - 1;
		if (iCurrentPage === iTotalPages) {
			var result = Alloy.createController('result', args);
			args.addView(result.getTopLevelViews()[0]);
			args.scrollToView(result.getTopLevelViews()[0]);
		}
		$.viewQuestMain.parent.setCurrentPage($.viewQuestMain.parent.currentPage + 1);
	});
}