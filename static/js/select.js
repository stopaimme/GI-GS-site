var currentSceneList = ["bicycle", "garden","stump", "lego", "hotdog", "armadillo", "ficus"];
var currentScene = "bicycle";

var currentSceneList = ["lego", "hotdog", "armadillo", "ficus"];
var currentScene = "lego";



function ChangeScene(idx){
    var li_list = document.getElementById("scene").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentScene = currentSceneList[idx]
    document.getElementById("all_video").src = "static/videos/" + currentScene +'.mp4';
}

function ChangeObject(idx){
    var li_list = document.getElementById("object").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentObject = currentObjectList[idx]
    document.getElementById("all_video").src = "static/videos/" + currentScene +'.mp4';
}
