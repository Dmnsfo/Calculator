const n1 = document.getElementById('1')
const n2 = document.getElementById('2')
const n3 = document.getElementById('3')
const n4 = document.getElementById('4')
const n5 = document.getElementById('5')
const n6 = document.getElementById('6')
const n7 = document.getElementById('7')
const n8 = document.getElementById('8')
const n9 = document.getElementById('9')
const n0 = document.getElementById('0')
const sum = document.getElementById('+')
const subtract = document.getElementById('-')
const multiply = document.getElementById('x')
const divide = document.getElementById(':')
const equals = document.getElementById('=')
const square = document.getElementById('√x')
const power = document.getElementById('x^y')
const mod = document.getElementById('mod')
const textarea = document.getElementsByTagName('textarea')[0]
const numbers = document.getElementsByClassName('button')

off=true
/*console.log(off)*/

function digit(n) {
	/*console.log('digit is working')*/
	if (off===false) {
		/*console.log('digit is really working')*/
			if (textarea.placeholder==='0') {
			textarea.placeholder=n
		} else {
			textarea.placeholder=textarea.placeholder+n
		}
	}
}

function run() {
	if (off===false) {
		try {
			textarea.textContent = eval(textarea.placeholder);
		}
		catch(err) {
			textarea.placeholder='error' 
			setTimeout(function() {textarea.placeholder=0}, 2000);
		}	
	}
}

/*function selfdistruction () {
	setTimeout(function() {
		document.body.innerHTML='This website ran out of time, refresh the page to make it work again.'
		console.log('ops')
	}, 300000);
}

selfdistruction()*/

function AC(){
	if (off===false) {
		if (textarea.placeholder!=='' | textarea.value!=='') {
			textarea.textContent=''
			textarea.placeholder='0'
		}
	}
}

function ON() {
	if (textarea.placeholder==='' && textarea.value==='') {
		textarea.textContent=''
		textarea.placeholder='0'
		off=false
		/*console.log(off)*/
	}
}


function OFF() {
	textarea.placeholder='';
	textarea.textContent='';
	return off=true
}

function CE(){
	if (off===false) {
		if (textarea.placeholder.length===1) {
			if (textarea.placeholder==='0') {
				/*console.log('placeholder is empty.')*/
			} else {
				/*console.log(textarea.placeholder);*/
				textarea.placeholder = textarea.placeholder.substring(0, textarea.placeholder.length-1);
				textarea.placeholder = 0
			} 
		} else {
			/*console.log('textareasplaceholder was longer than one');*/
			textarea.placeholder = textarea.placeholder.substring(0, textarea.placeholder.length-1);
		}
	}
}

