
var anz = {
    br: "block",
    nobr: "inline-block"
};
var engine = {
    show : function(id,art) {
        document.getElementById(id).style.display = art;
    },

    hide : function(id) {
        document.getElementById(id).style.display = "none";
    }
}
var ttt = 0;
var tttt = 0;
function sp1() {
    ttt = ttt + 1;
}
function sp2() {
    tttt = tttt + 1;
}
function how() {
    window.alert(ttt);
    window.alert(tttt);
}
function zrk() {
    ttt = 0;
    tttt = 0;
}


