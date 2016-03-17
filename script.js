const _dock = parent => {
  parent.appendChild(document.importNode(document.querySelector("template.window").content, true).querySelector(".dock"))
}
const _win = p => {
  var e = document.querySelector("template.window")
  e.content.querySelector(".content").innerHTML = p.content
  e = document.importNode(e.content, true).querySelector(".window")
  $(e).draggable({
    cancel: ".content",
    containment: p.ct || "body",
    scroll: false,
    stack: { group: ".window", min: 1 }
  }).resizable({
    handles: "e, s, se",
    containment: p.ct || "body",
    minHeight: p.mw || p.w,
    minWidth: p.mh || p.h,
    maxHeight: p.xw || $(window).height(),
    maxWidth: p.xh || $(window).width()
  }).dblclick(function(e) {
    if (this == e.target)
      $(this).toggleClass("max")
  })
  $(e).children(".content")[0].innerHTML = p.content
  $(p.parent).append(e)
  $(".btn-min, .btn-max").hover(function() {
     this.querySelector("button").classList.add("a")
  },
  function() {
    this.querySelector("button").classList.remove("a")
  })
}
$(document).ready(function() {
  $(".circle").hover(function() {
    this.querySelector("button").classList.add("a")
  },
  function() {
    this.querySelector("button").classList.remove("a")
  })
})
