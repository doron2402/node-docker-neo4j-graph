#Using Only Docker Containers


1. Run Neo4J in a seperate container
     - docker pull tpires/neo4j
     - docker run -i -t -d --name neo4j --cap-add=SYS_RESOURCE -p 7474:7474 tpires/neo4j
     - access to http://localhost:7474 
     - user/pass neo4j/doron

2. Run the express App
     - docker build . // From the directory 
