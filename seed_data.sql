
BEGIN TRANSACTION;
CREATE TABLE episode_data_raw (series integer,season integer,enum integer,title text,stardate text,
director text,storyBy text, teleplayBy text,airdate date);

Insert into episode_data_raw (series,season,enum,title,stardate,director,storyBy, teleplayBy,airdate)
VALUES
(1,1,1,'The Man Trap','1513.1','Marc Daniels','George Clayton Johnson',NULL,'19660908'),
(1,1,2,'Charlie X','1533.6','Lawrence Dobkin','Gene Roddenberry','D.C. Fontana','19660915'),
(1,1,3,'Where No Man Has Gone Before','1312.4','James Goldstone','Samuel A. Peeples',NULL,'19660922'),
(1,1,4,'The Naked Time','1704.2','Marc Daniels','John D. F. Black',NULL,'19660929'),
(1,1,5,'The Enemy Within','1672.1','Leo Penn','Richard Matheson',NULL,'19661006'),
(1,1,6,'Mudd''''s Women','1329.8','Harvey Hart','Gene Roddenberry','Stpehen Kandel','19661013'),
(1,1,7,'What Are Little Girls Made Of?','2712.4','James Goldstone','Robert Bloch',NULL,'19661020'),
(1,1,8,'Miri','2713.5','Vincent McEveety','Adrian Spies',NULL,'19661027'),
(1,1,9,'Dagger of the Mind','2715.1','Vincent McEveety','S. Bar-David',NULL,'19661103'),
(1,1,10,'The Corbomite Maneuver','1512.2','Joseph Sargent','Jerry Sohl',NULL,'19661110'),
(1,1,11,'The Menagerie','3012.4','Marc Daniels','Gene Rodenberry',NULL,'19661117'),
(1,1,12,'The Menagerie','3013.1','Robert Butler','Gene Rodenberry',NULL,'19661124'),
(1,1,13,'The Conscience of the King','2817.6','Gerd Oswald','Barry Trivers',NULL,'19661208'),
(1,1,14,'Balance of Terror','1709.2','Vincent McEveety','Paul Schneider',NULL,'29661215'),
(1,1,15,'Shore Leave','3025.3','Robert Sparr','Theodore Sturgeon',NULL,'19661229'),
(1,1,16,'The Galileo Seven','2821.5','Robert Gist','Oliver Crawford','S. Bar-David','19670115'),
(1,1,17,'The Squire of Gothos','2124.5','Don McDougall','Paul Schneider',NULL,'19670112'),
(1,1,18,'Arena','3045.6','Joseph Pevney','Fredric Brown','Gene L. Coon','19670119'),
(1,1,19,'Tomorrow Is Yesterday','3113.2','Michael O''''Herlihy','D. C. Fontana',NULL,'19670126'),
(1,1,20,'Court Martial','2947.3','Marc Daniels','Don M. Mankiewicz','Steven W. Carabatsos','19670202'),
(1,1,21,'The Return of the Archons','3156.2','Joseph Pevney','Gene Roddenberry','Boris Sobelman','19670209'),
(1,1,22,'Space Seed','3141.9','Marc Daniels','Carey Wilber','Gene L. Coon','19670216'),
(1,1,23,'A Taste of Armageddon','3192.1','Joseph Pevney','Robert Hamner','Gene L. Coon','19670223'),
(1,1,24,'This Side of Paradise','3417.3–3417.7','Ralph Senensky','Nathan Butler','D. C. Fontana','19670302'),
(1,1,25,'The Devil in the Dark','3196.1','Joseph Pevney','Gene L. Coon',NULL,'19670309'),
(1,1,26,'Errand of Mercy','3198.4','John Newland','Gene L. Coon',NULL,'19670323'),
(1,1,27,'The Alternative Factor','3087.6','Gerd Oswald','Don Ingalls',NULL,'19670330'),
(1,1,28,'The City on the Edge of Forever','Unknown','Joseph Pevney','Harlan Ellison',NULL,'19670406'),
(1,1,29,'Operation: Annihilate!','3287.2','Herschel Daugherty','Steven W. Carabatsos',NULL,'19670413');

END;