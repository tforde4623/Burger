//added in order to attach handlers after rendered (doesn't work without it)
$(() => {

  // listener to change status to devoured
  $('.devour_button').on('click', function(event) {
    const id = $(this).data('id');
    $.ajax({
      url: `/api/burgers/${id}`,
      type: 'PUT'
    }).then(() => location.reload());
  });

  // listener for adding a burger
  $('.create_burger').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
      url: '/api/burgers',
      type: 'POST',
      data: {
        burger_name: $('#name_input').val()
      }
    }).then(location.reload());
  });

});
