var neo4j = require('neo4j');
var neo4jUrl;
if (process.env['NEO4J_PORT_7474_TCP_ADDR']){
  neo4jUrl = 'http://neo4j:doron@' + process.env['NEO4J_PORT_7474_TCP_ADDR'] + ':7474'; 
} else {
  neo4jUrl = 'http://neo4j:doron@localhost:7474';
}

module.exports = new neo4j.GraphDatabase(neo4jUrl);