package javaInterviewPrep;

import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.*;

public class FilterActiveUsers {

    public static void FilterActiveUsers(){
        String dbUrl = "jdbc:sqlite:test_database.db";
        String sqlFilePath = "setup.sql";

        try (Connection conn = DriverManager.getConnection(dbUrl)) {
            System.out.println("Connection to SQLite has been established.");

            // 1. Create and fill database using the SQL file
            executeSqlScript(conn, sqlFilePath);
        }
    }

}
