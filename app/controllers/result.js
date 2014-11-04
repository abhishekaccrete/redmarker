var args = arguments[0] || {};

var correct_count = 0;

var incorrect_count = 0;

$.lblTotalQuestions.text = 'Total Questions: '+args.views.length;

args.views.forEach(function(element, index, array){
	Ti.API.info(element);
	if(element.correct)
	{
		correct_count+=1;
	}
	else
	{
		incorrect_count+= 1;
	}
});

$.lblCorrect.text = 'Correctly Answered: '+correct_count;
$.lblInCorrect.text = 'Incorrect Answered: '+incorrect_count;
