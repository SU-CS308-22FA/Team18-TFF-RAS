function parse(str) {
    let goal = {Player : "", Time: "", How : ""};
    let mini="";
    for (let i = 0; i < str.length; i++) {
        if (str[i]===",") {
            goal.Player=(mini);
            mini="";
            i++;
        }
        if (str[i]===".") {
            goal.Time=(mini);
            mini="";
            i+=5;
        }
        if (str[i]===")") {
            goal.How=(mini);
            mini=="";
        }
        mini+=str[i];
    }
    return goal;
}


console.log(parse("BORJA SAINZ EGUSQUIZA,57.dk (F)"));