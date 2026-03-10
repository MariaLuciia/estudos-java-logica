package desafios;

import java.util.Scanner;

public class MeuPrimeiroVerificador {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		
		int[] meuJogo = {7, 12, 28, 41, 50, 52};
		int[] resultadoOficial = new int[6];
		
		System.out.println("--- CONFERIDOR DE SORTE ---");
		
		for (int i = 0; i < 6; i++) {
			System.out.print("Digite o " + (i + 1) + "º número sorteado (1-60): ");
			int palpite = leitor.nextInt();
			
			if (palpite < 1 || palpite > 60) {
				System.out.println("Valor inválido! Tente de 1 a 60.");
				i--;
			} else {
				resultadoOficial[i] = palpite;
			}
		}
			
		int totalAcertos = 0;
		System.out.print("Números que você acertou: ");
		
			for (int i = 0; i<6; i++) {
				for (int j = 0; j < 6; j++) {
					if (meuJogo[i] == resultadoOficial[j]) {
						System.out.print(meuJogo[i] + " ");
						totalAcertos++;
						
					}
				}
			}
			
		if (totalAcertos == 0) {
			System.out.print("Nenhum");
					
		}
		System.out.println();
		
		System.out.println("\n========================");
		System.out.println("Você acertou " + totalAcertos + " números!");
		
		if (totalAcertos >= 4) {
			System.out.println("Parabéns! Você ganhou um prêmio!");
		} else {
			System.out.println("Continue estudando Java para ter mais sorte!");
		}
		
		leitor.close();
		
		}
	}


