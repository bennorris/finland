$(document).ready(function() {
  $('button.english-language').on('click', function() {
    $('div.finnish-language').hasClass('hidden') ?  '' : $('div.finnish-language').addClass('hidden');
    $('div.english-language').hasClass('hidden') ? $('div.english-language').removeClass('hidden') : '';
  });

  $('button.finnish-language').on('click', function() {
    $('div.finnish-language').hasClass('hidden') ? $('div.finnish-language').removeClass('hidden') : '';
    $('div.english-language').hasClass('hidden') ? '' : $('div.english-language').addClass('hidden');
  })
})
