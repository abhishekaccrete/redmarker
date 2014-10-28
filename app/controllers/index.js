/*
 $.tblMenu.data = [{title: 'Quiz'}, {title: 'Feature Disabled'}, {title: 'Feature Disabled'}, {title: 'Feature Disabled'}];

 $.tblMenu.addEventListener('click', function(e){
 if(e.index > 0){
 alert(e.row.title);
 }
 else{
 var quest_controller = Alloy.createController('questions', question_data);
 config.platform === 'android' ? quest_controller.getTopLevelViews()[0].open() : $.navWin.openWindow(quest_controller.getTopLevelViews()[0]);
 }
 });
 */

function openQuiz(e) {
	var quest_controller = Alloy.createController('questions', question_data);
	config.platform === 'android' ? quest_controller.getTopLevelViews()[0].open() : $.navWin.openWindow(quest_controller.getTopLevelViews()[0]);
}

$.navWin.open(); 