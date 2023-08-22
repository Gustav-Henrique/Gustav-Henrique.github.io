const DDD = [
    '11', '12', '13', '14', '15', '16', '17', '18', '19',
    '21', '22', '24',
    '27', '28',
    '31', '32', '33', '34', '35', '37', '38',
    '41', '42', '43', '44', '45', '46',
    '47', '48', '49',
    '51', '53', '54', '55',
    '61',
    '62', '64',
    '63',
    '65', '66',
    '67',
    '68',
    '69',
    '71', '73', '74', '75', '77',
    '79',
    '81', '87',
    '82',
    '83',
    '84',
    '85', '88',
    '86', '89',
    '91', '93', '94',
    '92',
    '95', '96', '97', '98', '99'
  ];
  
  let arrayCheck = document.getElementById('contato')['opc'];
  let limiteDeCheck = 0;
  function verificar(){
    for(let i = 0; i < arrayCheck.length; i++){
      if(arrayCheck[i].checked){
        limiteDeCheck++;
      }
      if(limiteDeCheck > 3){
        alert('Limite de atividades excedidas');
      }
    }
    dddtrue()
  }
  function dddtrue(){
    var DdD = document.getElementById('ddd').value
    if (DDD.includes(DdD)){
      alert('Seu cadastro foi realizado')
    }
    else{
      alert('DDD inválido') 
    }
  }
  