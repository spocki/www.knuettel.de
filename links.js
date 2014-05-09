var links = [
    { text: "devoops", link: "http://devoops.me", type: LAYOUT },
    { text: "java", link: "http://www.java.com/de/", type: JAVA },
    { text: "airplay", link: "http://apiary.io/", type: JAVA },
    { text: "d3", link: "http://d3js.org/", type: JAVASCRIPT },
    { text: "d3", link: "http://bost.ocks.org/mike/", type: JAVASCRIPT },
    { text: "raphael", link: "http://raphaeljs.com/", type: JAVASCRIPT },
    { text: "RESTeasy", link: "http://docs.jboss.org/resteasy/2.0.0.GA/userguide/html/", type: JAVA },
    { text: "logstash", link: "http://logstash.net/", type: LAYOUT },
    { text: "kibana", link: "http://www.elasticsearch.org/overview/kibana/", type: LAYOUT },
    { text: "elasticsearch", link: "http://www.elasticsearch.org/overview/elasticsearch/", type: LAYOUT },
    { text: "rest-assured", link: "https://code.google.com/p/rest-assured/", type: LAYOUT },
    { text: "mongojack", link: "http://mongojack.org/", type: LAYOUT },
    { text: "mockaroo", link: "http://www.mockaroo.com/", type: LAYOUT },
    { text: "restangular", link: "https://github.com/mgonto/restangular", type: LAYOUT },
    { text: "angular-ui", link: "http://angular-ui.github.io/", type: LAYOUT },
    { text: "yakindu", link: "http://www.yakindu.de/", type: LAYOUT },
    { text: "balsamiq", link: "https://www.mybalsamiq.com/", type: LAYOUT },
    { text: "websequencediagramm", link: "https://www.websequencediagrams.com/", type: LAYOUT },
    { text: "morris", link: "http://www.oesmith.co.uk/morris.js/", type: LAYOUT },
    { text: "ionicons", link: "http://ionicons.com/", type: LAYOUT },
    { text: "font awesome", link: "http://fortawesome.github.io/Font-Awesome/", type: LAYOUT },
    { text: "weather icons", link: "http://erikflowers.github.io/weather-icons/", type: LAYOUT },
    { text: "openwebicons", link: "http://pfefferle.github.io/openwebicons", type: LAYOUT },
    { text: "map icons", link: "http://map-icons.com/#icons", type: LAYOUT },

    { text: "github", link: "http://github.com", type: LAYOUT },

    { text: "nodejs", link: "http://nodejs.org/", type: JAVASCRIPT },
    { text: "express", link: "http://expressjs.com/", type: JAVASCRIPT },
    { text: "sass", link: "http://sass-lang.com/", type: DATABASE },
    { text: "less", link: "http://lesscss.org/", type: DATABASE },
    { text: "bootstrap", link: "http://getbootstrap.com/", type: DATABASE },
    { text: "coffee script", link: "http://coffeescript.org/", type: JAVASCRIPT },
    { text: "jade", link: "http://jade-lang.com/", type: DATABASE },
    { text: "ruby", link: "https://www.ruby-lang.org/de/", type: DATABASE },

    { text: "gitab", link: "https://www.gitlab.com/gitlab-ce/", type: DATABASE },
    { text: "stash", link: "https://www.atlassian.com/de/software/stash", type: DATABASE },
    { text: "youtrack", link: "http://www.jetbrains.com/youtrack/", type: DATABASE },
    { text: "scrum", link: "http://de.wikipedia.org/wiki/Scrum", type: DATABASE },
    { text: "activemq", link: "http://activemq.apache.org/", type: DATABASE },
    { text: "forge", link: "http://forge.jboss.org/", type: DATABASE },
    { text: "jboss", link: "http://jbossas.jboss.org/", type: DATABASE },


    { text: "bower", link: "http://bower.io/", type: JAVASCRIPT },
    { text: "npm", link: "https://www.npmjs.org/", type: JAVASCRIPT },
    { text: "angular", link: "https://angularjs.org/", type: DATABASE },
    { text: "qUnit", link: "http://qunitjs.com/", type: JAVASCRIPT },
    { text: "jUnit", link: "http://junit.org/", type: DATABASE },
    { text: "jasmine", link: "http://jasmine.github.io/", type: JAVASCRIPT },
    { text: "forge", link: "https://code.google.com/p/mockito/", type: DATABASE },
    { text: "mockito", link: "http://easymock.org/", type: DATABASE },
    { text: "commons", link: "http://commons.apache.org/", type: DATABASE },
    { text: "datejs", link: "http://www.datejs.com/", type: JAVASCRIPT },
    { text: "joda", link: "http://www.joda.org/", type: DATABASE },
    { text: "leaflet", link: "http://leafletjs.com/", type: DATABASE },


    { text: "openJDK", link: "http://openjdk.java.net/", type: DATABASE },
    { text: "jenkins", link: "http://jenkins-ci.org/", type: DATABASE },
    { text: "travis", link: "https://travis-ci.org/", type: DATABASE },
    { text: "nexus", link: "http://www.sonatype.org/nexus/", type: DATABASE },
    { text: "eclipse", link: "http://www.eclipse.org/", type: IDE },
    { text: "webstorm", link: "http://www.jetbrains.com/webstorm/", type: IDE },
    { text: "oauth", link: "http://oauth.net/", type: DATABASE },
    { text: "jquery", link: "http://jquery.com/", type: JAVASCRIPT },

    { text: "Atom", link: "https://atom.io/", type: IDE },

    { text: "Sonar", link: "http://www.sonarqube.org/", type: DATABASE },
    { text: "solr", link: "http://lucene.apache.org/solr/", type: DATABASE },
    { text: "Ant", link: "http://ant.apache.org/", type: DATABASE },
    { text: "Dash", link: "http://kapeli.com/dash", type: DATABASE },
    { text: "pdfbox", link: "http://pdfbox.apache.org/", type: DATABASE },
    { text: "xText", link: "http://www.eclipse.org/Xtext/", type: DATABASE },
    { text: "iText", link: "http://itextpdf.com/", type: DATABASE },
    { text: "openFaces", link: "http://openfaces.org/", type: DATABASE },
    { text: "GWT", link: "http://www.gwtproject.org/", type: DATABASE },


    { text: "slf4j", link: "http://www.slf4j.org/", type: DATABASE },
    { text: "ejb3", link: "http://ejb3.jboss.org/", type: DATABASE },
    { text: "ubuntu", link: "http://www.ubuntu.com/", type: DATABASE },
    { text: "centos", link: "http://www.centos.org/", type: DATABASE },
    { text: "drools", link: "http://drools.jboss.org/", type: DATABASE },
    { text: "errai", link: "http://erraiframework.org/", type: DATABASE },
    { text: "hibernate", link: "http://hibernate.org/orm/", type: DATABASE },
    { text: "weld", link: "http://weld.cdi-spec.org/", type: DATABASE },
    { text: "felis", link: "http://felix.apache.org/", type: DATABASE },
    { text: "ongl", link: "http://commons.apache.org/proper/commons-ognl/", type: DATABASE },
    { text: "directory", link: "http://directory.apache.org/studio/", type: DATABASE },
    { text: "jxls", link: "http://jxls.sourceforge.net/", type: DATABASE },
    { text: "poi", link: "http://poi.apache.org/", type: DATABASE },
    { text: "yeoman", link: "http://yeoman.io/", type: JAVASCRIPT },
    { text: "grunt", link: "http://gruntjs.com/", type: JAVASCRIPT },

    { text: "mongodb", link: "http://mongodb.org", type: DATABASE },
    { text: "dailyjs", link: "http://dailyjs.com", type: DATABASE }
];


/*


 */