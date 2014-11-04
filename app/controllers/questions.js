var args = arguments[0] || {};

$.winQuest.addEventListener('focus', function(e){
	$.quizScroll.setCurrentPage(0);
});

$.quizScroll.addEventListener('scroll', function(e){
	var media = Ti.Media.createAudioPlayer({url: e.view.sound_url});
	media.play();
});

if (args.length > 0) {
	var childViews = [];
	args.forEach(function(element, index, array) {
		var view = Ti.UI.createView({
			left : 0,
			top : 0,
			width : Ti.UI.FILL,
			height : Ti.UI.FILL,
			backgroundColor : 'transparent',
			layout : 'vertical',
			sound_url : element.sound
		});
		var viewQuestion = Ti.UI.createView({
			left : 0,
			top : 0,
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE
		});
		var lblQuestion = Ti.UI.createLabel({
			left : '10%',
			top : '10%',
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			text : element.question
		});
		viewQuestion.add(lblQuestion);
		var viewOptions = Ti.UI.createView({
			left : 0,
			top : 0,
			width : Ti.UI.FILL,
			height : Ti.UI.SIZE
		});
		var tblData = [];
		element.options.forEach(function(option, i, arr_options) {
			var row = Ti.UI.createTableViewRow({
				isCorrect : option.correct
			});
			var rowView = Ti.UI.createView({
				left : 0,
				top : 0,
				width : Ti.UI.FILL,
				height : Ti.UI.SIZE,
				layout : 'horizontal'
			});
			var imgView = Ti.UI.createImageView({
				left : 0,
				top : 0,
				width : '30%',
				height : Ti.UI.SIZE,
				image : option.image
			});
			var lblOption = Ti.UI.createLabel({
				left : 5,
				top : 0,
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				text : option.label
			});
			rowView.add(imgView);
			rowView.add(lblOption);
			row.add(rowView);
			tblData.push(row);
		});
		var tblViewOptions = Ti.UI.createTableView({
			data : tblData
		});

		tblViewOptions.addEventListener('click', function(e) {
			if (e.row.isCorrect) {
				alert('Correct answer');
			} else {
				alert('Wrong answer');
			}
			if ($.quizScroll.currentPage !== $.quizScroll.views.length - 1) {
				$.quizScroll.setCurrentPage($.quizScroll.currentPage + 1);
			} else {
				$.winQuest.close();
				alert('Thanks for taking the quiz');
			}
		});
		viewOptions.add(tblViewOptions);
		view.add(viewQuestion);
		view.add(viewOptions);
		view.addEventListener('focus', function(e){
			Ti.API.info('testing');
		});
		childViews.push(view);
	});
	$.quizScroll.views = childViews;
}