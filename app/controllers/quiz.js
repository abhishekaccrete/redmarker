var args = arguments[0] || {};

function playFirstSound(e) {
	Ti.API.info(question_data[0].sound);
	mediaPlayer.setUrl(question_data[0].sound);
	mediaPlayer.play();
}

function playEachSound(e) {
	if (typeof question_data[e.currentPage] !== "undefined") {
		Ti.API.info(question_data[e.currentPage].sound);
		mediaPlayer.setUrl(question_data[e.currentPage].sound);
		mediaPlayer.play();
	}
}

$.winQuiz.addEventListener('open', function(e) {
	var childViews = [];
	question_data.forEach(function(element, index, array) {
		var questController = Alloy.createController('question', $.scbViewQuest);
		questController.lblQuestion.setText(element.question);
		var tblData = [];
		element.options.forEach(function(opt, index_opt, arr_opt) {
			var optController = Alloy.createController('options_row');
			optController.imgOption.image = opt.image;
			optController.lblOption.text = opt.label;
			optController.tblRowOption.isCorrect = opt.correct;
			tblData.push(optController.getTopLevelViews()[0]);
		});
		questController.tblOptions.data = tblData;
		childViews.push(questController.getTopLevelViews()[0]);
	});
	$.scbViewQuest.views = childViews;
});
