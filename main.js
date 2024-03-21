import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Ingrese un año para determinar el siglo y el primer año de dicho siglo:");
        int year = scanner.nextInt();
        int century = siglo(year);
        int primerAnho = primer_anho(century);
        System.out.println("El año " + year + " pertenece al siglo " + century + " y su primer año es " + primerAnho);

        System.out.println("Ingrese la cantidad de dinero en moneda local:");
        double cantidadMonedaLocal = scanner.nextDouble();
        double cantidad8AM = conversionA_Las8AM(cantidadMonedaLocal);
        double cantidadMediodia = conversionAlMediodia(cantidadMonedaLocal);
        System.out.println("Cantidad de dinero a las 8:00 a.m.: " + cantidad8AM);
        System.out.println("Cantidad de dinero al mediodía: " + cantidadMediodia);

        System.out.println("Ingrese el número de metros del objeto:");
        double metros = scanner.nextDouble();
        conversionMedidas(metros);
        
        scanner.close();
    }
    
    public static int siglo(int year) {
        return (year + 99) / 100;
    }
    
    public static int primer_anho(int century) {
        return (century - 1) * 100 + 1;
    }

    public static double conversionA_Las8AM(double cantidadMonedaLocal) {
        return cantidadMonedaLocal;
    }

    public static double conversionAlMediodia(double cantidadMonedaLocal) {
        return cantidadMonedaLocal * 0.9;
    }

    public static void conversionMedidas(double metros) {
        double pies = metros * 3.28084;
        double pulgadas = pies * 12;
        double centimetros = metros * 100;
        
        System.out.println(metros + " metros equivalen a:");
        System.out.println(pies + " pies");
        System.out.println(pulgadas + " pulgadas");
        System.out.println(centimetros + " centímetros");
    }
          }
