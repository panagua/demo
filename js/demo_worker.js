let i=0;
function count() {
    i++;
    postMessage(i);
    setTimeout("count()",200);
}
count();