function addSkill(skill) {
  var skill_list = document.getElementById("skill_list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(skill));

  var level = ["Beginner", "Intermediate", "Expert"];

  var selectList = document.createElement("select");
  selectList.id = "levels";
  li.appendChild(selectList);

  for (var i = 0; i < level.length; i++) {
    var option = document.createElement("option");
    option.value = level[i];
    option.text = level[i];
    selectList.appendChild(option);
  }

  selectList.style.setProperty("margin-left", "10px");
  li.style.setProperty("text-align", "left");
  skill_list.appendChild(li);
}
