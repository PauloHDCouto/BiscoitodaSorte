alert('Do you wanna play a game?')

//variaveis
const list = [
'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu. (Paulinho)',
'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo. (Sócrates)',
'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido. (W. F. Grenfel)',
'O talento vence jogos, mas só o trabalho em equipe vence campeonatos. (Michael Jordan)',
'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer. (Santo Agostinho)',
'Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos. (Churton Collins)',
'Seja corajoso. Mesmo que você não seja, finja ser. Ninguém nota a diferença. (H. Jackson Brown Jr.)',
'Sorte é o que acontece quando a preparação encontra a oportunidade. (Elmer Letterman)',
'O único lugar que o sucesso vem antes do trabalho é no dicionário. (Vidal Sasson)',
'Somos o que repetidamente fazemos. Portanto, a excelência não é um feito, é um hábito. (Aristóteles)',
'Persistência é irmã gêmea da excelência. Uma é mãe da qualidade, a outra a mãe do tempo. (Marabel Morgan)',
'Devemos prometer somente aquilo que podemos entregar e entregar mais do que prometemos. (Jean Rozwadowski)'
]
const btnOpen = document.querySelector('#shake')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.esconde1')
const screen2 = document.querySelector('.esconde2')


//callbaks
btnOpen.addEventListener('click', handleOpenClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

//functions
function handleOpenClick(event) {
  event.preventDefault() 
  screen1.classList.add('hide')
  screen2.classList.remove('hide')

  let randomNumber = (Math.round(Math.random() * 10))

  screen2.querySelector('p').innerText = `${list[randomNumber]} `
}
function handleResetClick() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}  
function handleResetEnter(event) {
  if(event.key == 'Enter' && screen1.classList.contains('hide'))  
    handleResetClick()
    
}

