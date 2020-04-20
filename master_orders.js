//SERACH ENGINE + HIDE-SHOW TABLE ROWS!!!
//TO DO:
//1. маркиране на селектирания вид + на избрания акт
//2. клик стрелка за експандване
//3. коментари

document.getElementById("section_1").style.display = "none";
document.getElementById("section_2").style.display = "none";

function hide_show(id) {
    var div = document.getElementById(id);
    var r = id.substring(11)

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#section_"+r+" tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

    switch (id) {
        case "button_sec_"+r: {
          if (document.getElementById("section_"+r).style.display == "none") {
            document.getElementById("section_"+r).style.removeProperty("display")
          } else {
            document.getElementById("section_"+r).style.display = "none";
          }

            break;
        }

        default: {
            // any other case
        }
    }
}

//ADD, CORRECT, DELETE!!!

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}


//----------------------------------------------------------------------------------

function saveSection() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var value = document.getElementById('vid_dokument').value;
  var t = document.createTextNode(value);
  tr.appendChild(t);
  document.getElementById('section_1').appendChild(tr);























}
