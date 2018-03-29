document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.querySelectorAll('[role="feed"]').forEach(e => e.parentNode.removeChild(e))
  }
}
