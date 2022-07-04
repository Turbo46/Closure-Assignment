import { cutFunc } from "./Util.js";

const firstFive = cutFunc(5);
firstFive("Avengers"); // should print "Aveng"

const lastFour = cutFunc(-4);
lastFour("Guardians"); // should print "ians"

const all = cutFunc(0);
all("X-Men"); // should print "X-Men"