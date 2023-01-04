const todoField = $(".todo-field");
const todoContainer = $(".todo-container");


const todoItemTemplate = (title) => $(`
  <div>
    <h3>${title}</h3>
    <input type="text" placeholder="Write content..." />
  </div>
`);

const toggleEvent = (event) => toggleEditMode($(event.target));

function toggleEditMode(target) {
  let el;
  if (target.is("input")) {
    if (target.val() == "") return false; //avbryta om fält är tomt

    el = $(`<p>${target.val()}</p>`).on("click", toggleEvent);

    //el.on("click", toggleEvent);
  } else {

    el = $(`<input type="text" value=${target.text()}>`);

    el.on("blur", toggleEvent);
  }
  target.replaceWith(el);
}


todoField.on("keydown", event => {
  if (event.key == "Enter") {
    let title = todoField.val();
    let todoItem = todoItemTemplate(title);

    todoContainer.append(todoItem);


    todoItem
      .find("input")
      .focus() //När en todo har skapats, fokusera på dess input
      .on("blur", toggleEvent);
  }
});

const themes = {
  current: "light",
  dark: {
    backgroundColor: "#333",
    color: "#fff"
  },
  light: {
    backgroundColor: "#fff",
    color: "#000"
  }
}

$(".theme-btn").on("click", () => {
  if (themes.current == "light") {
    themes.current = "dark";
  } else {
    themes.current = "light";
  }

  $(".app").css(themes[themes.current]);
});