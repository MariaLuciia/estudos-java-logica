 Classe ContaBanco
 
publico numConta : Inteiro
protegido tipo: Caractere
privado dono: Caractere
privado saldo: Real
privado status : Logico;

 publico Metodo Construtor()
	saldo = 0
	status = falso
FimMetodo
      publico Metodo setNumConta(n: Inteiro)
	     numConta = numConta
FimMetodo
      publico Metodo getNumConta()
	     retone numConta
FimMetodo
     publico Metodo setTipo(t: Caractere)
	     tipo = t
FimMetodo
     publico Metodo getTipo()
	     retone tipo
FimMetodo
     publico Metodo setDono(d: Caractere)
	     dono = d 
FimMetodo
     publico Metodo getDono()
	     retorne dono
FimMetodo
	 publico Metodo setSaldo(s: Real)
		 saldo = s 
FimMetodo
	 publico Metodo getSaldo()
		 retone saldo
FimMetodo
	 publico Metodo setStatus(st: Logico)
		 status = st
FimMetodo
	 publico Metodo getStatus()
		 retone status
FimMetodo



	 publico Metodo abrirConta(t: Caractere)
		setTipo(t)
		setStatus(verdadeiro)
		 se (t = "CC") entao
		  saldo = 50
		 senao se (t = "CP") entao
		  saldo = 150
FimSe
FimMetodo

	 publico Metodo fecharConta()
		se (saldo > 0) entao
		 Escreva(" Conta com dinheiro")
			senao se ( saldo < 0) entao 
		  Escreva("Conta em debido")
		 senao
		  setStatus (falso)
		FimSe
	FimMetodo
	publico Metodo depositar (v: Real)
	    se (status = verdadeiro) entao 
		  saldo = saldo + v 
		senao 
		  Escreva ("Impossivel depositar")
        FimSe
	FimMetodo
	publico Metodo sacar(v: Real)
	    se (status = verdadeiro) entao 
		  se (saldo > v) entao
		     saldo = saldo - v 
		senao 
		     Escreva ("Saldo insuficiente")
		FimSe
	FimMetodo
	publico Metodo pagamMensal()
		var v: Real
		se (tipo = "CC") entao
			v = 12
		senao se (tipo = "CP") entao
			v = 20
		FimSe
			se (status = verdadeiro) entao
			    se (saldo > v) entao
				 saldo = saldo - v
				senao
				  Escreva ("Saldo insuficiente")
			FimSe
			senao
			  Escreva("Impossivel pagar")
			FimSe
	FimMetodo
	
	
	



 publico Metodo abrirConta()

FimMetodo		
 publico Metodo fecharConta()

FimMetodo
 publico Metodo deposita()

FimMetodo
 publico Metodo sacar()

FimMetodo
 publico Metodo pagamMensal()

FimMetodo






FimClasse