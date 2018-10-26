function addSkill(skill) {
  var skill_list = document.getElementById("skill_list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(skill));
  li.style.setProperty("text-align", "left");
  skill_list.appendChild(li);
}
