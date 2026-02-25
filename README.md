# ☕ Estudos de Java - Lógica de Programação

Repositório dedicado ao aprendizado de Java, abrangendo lógica de programação e orientação a objetos (POO).

## 🚀 Primeiro Exercício: Verificador de Idade
Este código simples utiliza a classe Scanner para ler a entrada do usuário e uma estrutura condicional if/else para decidir se a pessoa é maior de idade.

```java
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
