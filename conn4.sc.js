var turn = 0;
var r1 = ["-", "-", "-", "-", "-", "-", "-"]
var r2 = ["-", "-", "-", "-", "-", "-", "-"]
var r3 = ["-", "-", "-", "-", "-", "-", "-"]
var r4 = ["-", "-", "-", "-", "-", "-", "-"]
var r5 = ["-", "-", "-", "-", "-", "-", "-"]
var r6 = ["-", "-", "-", "-", "-", "-", "-"]
var r7 = ["-", "-", "-", "-", "-", "-", "-"]


function set(){
    setText("row1", setloop(r1))
    setText("row2", setloop(r2))
    setText("row3", setloop(r3))
    setText("row4", setloop(r4))
    setText("row5", setloop(r5))
    setText("row6", setloop(r6))
    setText("row7", setloop(r7))
    setText("message", "It is Player 1's (X) turn.")
}

function setloop(row){
    var text = "";
    for (var i = 0; i < row.length; i++) {
        text = text + row[i];
    }
    return text;
}

function button() {
    var row = getText("numinput");
    switch(row){
        case "1":
            update(r1);
            setText("row1", setloop(r1));
            break;
        case "2":
            update(r2); 
            setText("row2", setloop(r2));
            break;  
        case "3":
            update(r3);
            setText("row3", setloop(r3));
            break;
        case "4":
            update(r4); 
            setText("row4", setloop(r4));
            break;  
        case "5":
            update(r5);  
            setText("row5", setloop(r5));             
            break;
        case "6":
            update(r6); 
            setText("row6", setloop(r6));
            break;
        case "7":
            update(r7); 
            setText("row7", setloop(r7));
            break;
        default:
            setText("message", "Error, enter row number 1-7.") 
            break;   
    }
    }


function row4(input){
    var output = "";
    switch(input){
        case 1:
          output = setloop(r1) + setloop(r2) + setloop(r3) + setloop(r4); 
        break;
        case 2:
           output = setloop(r2) + setloop(r3) + setloop(r4) + setloop(r5);
           break;
        case 3:
           output = setloop(r3) + setloop(r4) + setloop(r5) + setloop(r6);
           break;
        case 4:
           output = setloop(r4) + setloop(r5) + setloop(r6) + setloop(r7);
           break;
        default:
            output = 'ERROR';
            break;     
    }
    return output;
}

function row7(input){
    var output = "";
    switch(input){
        case 1:
          output = setloop(r1); 
        break;
        case 2:
           output = setloop(r2);
           break;
        case 3:
           output = setloop(r3);
           break;
        case 4:
           output = setloop(r4);
           break;
        case 5:
           output = setloop(r5);
           break;
        case 6:
           output = setloop(r6);
           break;
        case 7:
           output = setloop(r7);
           break;
        default:
            output = 'ERROR';
            break;     
    }
    return output;
}
function update(row) {
    var col;
    if (turn == 0) {
        for (var item = 0; item < 8; item++) {
            if (row[item] == "-") {
                row[item] = "X"
                col = item;
                item = 7;
            }
        }
        setText("message", "It is Player 2's (O) turn.");
        turn = 1;
    } else if (turn == 1) {
        for (var item = 0; item < 8; item++) {
            if (row[item] == "-") {
                row[item] = "O"
                setloop(row);
                col = item;
                item = 7;
            }
        }
        setText("message", "It is Player 1's (X) turn.");
        turn = 0;
    }
    //row win
    for (var rr = 1; rr < 8; rr++) {
        var lis = row7(rr);
        console.log("rr" + rr);
        for (var rs = 0; rs < 4; rs++) {
            var sel = lis[rs] + lis[rs+1] + lis[rs+2] + lis[rs+3];
            if (sel == "XXXX") {
                setText("message", "Player 1 (X) wins!");
            } else if (sel == "OOOO") {
                setText("message", "Player 2 (O) wins!");
            }
        } 
      }          
    //column win
    for (var cr = 1; cr < 5; cr++) {
        var lis = row4(cr);
        var sel = lis[col] + lis[col+7] + lis[col+14] + lis[col+21];
        if (sel == "XXXX") {
            setText("message", "Player 1 (X) wins!");
        } else if (sel == "OOOO") {
            setText("message", "Player 2 (O) wins!");
        }
    }
}