function submit($element){
	var $span = $element.querySelector('span'),
		$spinner = $element.querySelector('img');
		$span.style.display = 'none';
		$spinner.style.display = 'block';
		setTimeout(function(){
			$span.style.display = 'block';
			$spinner.style.display = 'none';	
		},1000)
}