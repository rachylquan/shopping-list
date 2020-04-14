$(function() {

    // input submit
    $('#js-shopping-list-form').submit(function(event) {
         // stop the default form submission behavior
        event.preventDefault();

        // variable for list item from input
        const listItem = $(event.currentTarget).find('#shopping-list-entry').val();

        $('#shopping-list-entry').val('');

        // add item to shopping list
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    // check items when clicking the button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) { $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
     });

    //  remove items when clicking delete
     $('.shopping-list').on('click', '.shopping-item-delete', function(event) { $(this).closest('li').remove();
     });
})