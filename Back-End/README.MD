
mvnw spring-boot:run

mvnw clean package 


spring.datasource.url=jdbc:mysql://${MYSQL_DB_HOST:localhost}:${MYSQL_DB_PORT:3306}/eccosystem_db?useSSL=false
spring.datasource.username=${MYSQL_DB_USERNAME}
spring.datasource.password=${MYSQL_DB_PASSWORD}


docker run --name my-tomcat -p 127.0.0.1:8080:8080 -e APP_DB_DB=mydb -e APP_DB_USER=dbuser -e APP_DB_PASS=dbpass --link mongo-myapp:mongo -v /path-to/tomcat/webapps:/usr/local/tomcat/webapps -d tomcat:8-jre8-alpine


$ java -jar spring-boot-student-example.jar --config.variable=value_passing


application.yml