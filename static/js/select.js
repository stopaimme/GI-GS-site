var currentSceneList = ["bicycle", "flowers", "garden", "stump", "treehill", "room", "counter", "kitchen", "bonsai"];
var currentScene = "bicycle";

var currentObjectList = ["lego", "hotdog", "armadillo", "ficus"];
var currentObject = "lego";



function ChangeScene(idx){
    var li_list = document.getElementById("scene").children;
    var li_list2 = document.getElementById("object").children;
    console.log(idx);
    console.log(li_list);
    console.log(li_list2);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    for(i = 0; i < li_list2.length; i++){
        if (li_list2[i].className === "disabled"){
            continue
        }
        li_list2[i].className = "";
    }
    currentScene = currentSceneList[idx]
    document.getElementById("all_video").src = "static/videos/" + currentScene +'.mp4';
}

function ChangeObject(idx){
    var li_list = document.getElementById("object").children;
    var li_list = document.getElementById("scene").children;
    console.log(idx);
    console.log(li_list);
    console.log(li_list2);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    for(i = 0; i < li_list2.length; i++){
        if (li_list2[i].className === "disabled"){
            continue
        }
        li_list2[i].className = "";
    }
    currentObject = currentObjectList[idx]
    document.getElementById("all_video").src = "static/videos/" + currentObject +'.mp4';
}
