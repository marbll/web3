import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.util.LinkedList;

@ManagedBean(name = "main", eager = true)
@SessionScoped
public class MainPage implements Serializable {

    private LinkedList<Point> points = new LinkedList<>();

    public LinkedList<Point> getPoints(){
        return points;
    }

    private float x = 0;
    private String y = "0";
    private int r = 5;

    private float svgX;
    private float svgY;

    public float getX() {
        return x;
    }
    public float getSvgX() { return svgX; }
    public float getSvgY() { return svgY; }
    public String getY() {
        return y;
    }
    public int getR() {
        return r;
    }

    public void setX(int x) {
        this.x = x;
    }
    public void setSvgX(float x) {
        this.svgX = x;
    }
    public void setSvgY(float y) {
        this.svgY = y;
    }
    public void setY(String y) {
        this.y = y;
    }
    public void setR(int r) {
        this.r = r;
    }

    public void addSVGPoint(){
        Point p = new Point(svgX, svgY, r/2.0f);
        insertPoint(p);
    }

    public void addPoint(){
        //Session session = HibernateUtil.getSessionFactory().openSession();
        //session.beginTransaction();
        //Point p = new Point(getR(), getX(), getY(), getIsCheck());
        //setPoint(p);
        //session.save(p);
        //session.getTransaction().commit();

        float px = x/2.0f;
        float py = Float.parseFloat(y);
        float pr = r/2.0f;
        Point p = new Point(px, py, pr);

        //DBUtil.em.getTransaction().begin();
        //DBUtil.em.persist(p);
        //DBUtil.em.getTransaction().commit();

        insertPoint(p);
    }

    public void insertPoint(Point p){
        points.add(p);
    }

    public boolean hitsFigure(float x, float y, float r){
        return true;
    }
}
