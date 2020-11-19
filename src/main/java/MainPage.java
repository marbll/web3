import javax.faces.bean.ManagedBean;
import javax.faces.event.ValueChangeEvent;
import java.awt.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.LinkedList;

@ManagedBean(name = "main")
public class MainPage implements Serializable {

    private LinkedList<Point> points;

    private int x = 0;
    private String y;
    private int r = 5;

    public int getX() {
        return x;
    }
    public String getY() {
        return y;
    }
    public int getR() {
        return r;
    }

    public void setX(int x) {
        this.x = x;
    }
    public void setY(String y) {
        this.y = y;
    }
    public void setR(int r) {
        this.r = r;
    }

    public void addPoint(){
        points.add(new Point(1,2,3));
    }
}
