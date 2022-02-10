import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.ArrayList;

public class EjemploCRUD {

    Conexion db = new Conexion(); // Instancia de la clase conexión.
    ResultSet rs;
    PreparedStatement statement;

    public EjemploCRUD() {
    }

    public boolean create(Object o) {
        try {
            Connection con = db.conectar();
            String query = "INSERT INTO tabla (atributo, otroatributo) VALUES (?,?)";
            statement = con.prepareStatement(query);
            statement.setInt(1, o.getAtributo1());
            statement.setString(2, o.getAtributo2());
            int resultado = statement.executeUpdate();
            if (resultado >= 1) {
                con.close();
                return true;
            }
            con.close();
            return false;
        } catch (SQLException ex) {
            return false;
        }
    }

    public ArrayList<Movie> read() {
        ArrayList<Object> objetos = new ArrayList();
        try {
            Connection con = db.conectar();
            String query = "SELECT * FROM tabla";
            statement = con.prepareStatement(query);
            rs = statement.executeQuery();
            while (rs.next()) {
                Object o = new Object(); // Instanciamos el objeto mediante su constructor.
                pelicula.setAtributo1(rs.getString("atributo"));
                pelicula.setAtributo2(rs.getInt("otroatributo"));
                objetos.add(o);
            }
            return objetos;
        } catch (SQLException ex) {
            return objetos;
        }
    }

    public boolean update(Object o) {
        try {
            Connection con = db.conectar();
            String query = "UPDATE tabla SET atributo = ?,"
                    + "otroatributo = ?,"
                    + "WHERE id = ?";
            statement = con.prepareStatement(query);
            statement.setInt(1, o.getAtributo1());
            statement.setString(2, o.getAtributo2());
            statement.setInt(3, o.getId());
            int resultado = statement.executeUpdate();
            if (resultado >= 1) {
                con.close();
                return true;
            }
            con.close();
            return false;
        } catch (SQLException ex) {
            return false;
        }
    }

    public boolean delete(Object o) {
        try {
            Connection con = db.conectar();
            String query = "DELETE FROM tabla WHERE id = ?";
            statement = con.prepareStatement(query);
            statement.setInt(1, o.getId());
            int resultado = statement.executeUpdate();
            if (resultado >= 1) {
                con.close();
                return true;
            }
            con.close();
            return false;
        } catch (SQLException ex) {
            return false;
        }
    }
}
