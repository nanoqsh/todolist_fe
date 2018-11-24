(function () {

  // Task's mark click handler
  window.mark_handler = (e) => {
    let id = e.parentElement.getAttribute('attr-id');
    let set_done = e.getAttribute('attr-done') != 'done' ? 'done' : 'undone';

    e.setAttribute('attr-done', set_done);

    for (let el of e.childNodes)
      if (el.tagName == 'DIV')
        el.className = set_done;

    console.log("For task id: " + id + " setted a value " + set_done);
  };

  // Close popup handler
  window.close_popups = () => {
    let close_list = document.querySelectorAll('.popups .popup, .popups .overlay');

    for (let el of close_list)
      el.classList.remove('active')
  };

})();
