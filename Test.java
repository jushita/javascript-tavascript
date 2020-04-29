import java.util.ArrayList;

public class Test {
    public static void reverse(){ 
        ArrayList list = new ArrayList<Integer>(5);
        System.out.println(list.size());
        for (int i = 0; i < 6; i++) {
            list.add(i);
        }
        System.out.println(list.size());
    }

    public static void main(String[] args) {
        reverse();
    }
}