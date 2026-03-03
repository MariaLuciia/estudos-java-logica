import java.util.Scanner;

public class VerificadorIdade {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("--- Sistema de Cadastro ---");
        System.out.print("Digite sua idade: ");
        int idade = leitor.nextInt();
        
        if (idade >= 18) {
            System.out.println("Acesso liberado: Você é maior de idade.");
        } else {
            System.out.println("Acesso restrito: Você é menor de idade.");
        }
        
        leitor.close();
    }
}
