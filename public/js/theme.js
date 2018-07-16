jQuery.noConflict();
jQuery(document).ready(function($){



	$('.button').on('click', function() {

		console.log('clicked');

    var $button = $(this);
    var url = $button.data('url');
		var action = $button.data('action');
		var key = $button.data('key');
		var postID = $button.data('post');

    if ( url != '' ) {

			$.ajax({
				url: url,
				dataType: 'json',
				data: {
					action: 'add_vote',
					key: key,
					postID: postID
				},
				type: 'POST',
				success: function(data) {
					console.log(data);

					// update the list

					var postVotesUp = data.votes['post-votes-up'],
					 		postVotesDown = data.votes['post-votes-down'],
							postVotesNeutral = data.votes['post-votes-neutral'],
							postVotesSum = postVotesUp + postVotesDown;


					var postVotesUpPercent = postVotesUp * 100 / postVotesSum;
					var postVotesDownPercent = postVotesDown * 100 / postVotesSum;
					var postVotesNeutralPercent = postVotesNeutral * 100 / postVotesSum;

					$('.post-votes .post-votes-up').css('width', (postVotesUpPercent) + '%');
					$('.post-votes .post-votes-down').css('width', (postVotesDownPercent) + '%');
					$('.post-votes .post-votes-neutral').css('width', (postVotesNeutralPercent) + '%');

					$('.post-votes .post-votes-up').text( 'interessant (' + Math.round(postVotesUpPercent) + '%)' );
					$('.post-votes .post-votes-down').text( 'nicht interessant (' + Math.round(postVotesDownPercent) + '%)' );
					$('.post-votes .post-votes-neutral').text( 'weder noch (' + Math.round(postVotesNeutralPercent) + '%)' );

				}
			});

    }

	});



	$('[rel=gallery-group]').on('click', function(e){

		// e.preventDefault();

	});



	$('.menu-icon').on('click', function(e){

		e.preventDefault();

		$('#menu-mainmenu').slideToggle('fast');

	});




	$('.header-image-fold').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-folded');

		var h = $(window).height();

		if ($(this).hasClass('is-folded')) {

			$('.header-image').css('height', h);
			$('.header').css('margin-top', - $('.header').height() );
			$('.content').css('margin-top', '0');

		} else {

			$('.header-image').css('height', 350);
			$('.header').css('margin-top', '0px');
			$('.content').css('margin-top', '-80px');

		}

	});


	$('[data-which]').on('click', function(){
		$($(this).data('which')).show();
	});

	$('.modal .modal-button-close').on('click', function(e) {

		e.preventDefault();
		$('.modal').hide();

	});


	$('.vote-list > li').on('click', function(e){
		e.preventDefault();

		$(this).find('input[type=radio]').attr('checked', 'checked');
		$form = $(this).closest('form');
		var formData = $form.serialize();

		$.ajax({
			url: $form.attr('action'),
			data: formData,
			dataType: 'json',
			type: 'post',
			success: function(response){

				if (!response.status) {

					if (response.fields.length) {
						response.fields.forEach(function(field){

							$('.form-response').append('<p>' + field.message + '</p>');

						});
					}

					else {

						$('.form-response').html('<p>' + response.message + '</p>');

					}

				} else {

					$('.form-response')
						.addClass('form-response-success')
						.html('<p>' + response.message + '</p>');

				}
			}
		});

	})

	$('.form-feedback').on('submit', function(e){
		e.preventDefault();

		$('.form-response').empty();
		var formData = $(this).serialize();

		$.ajax({
			url: $(this).attr('action'),
			data: formData,
			dataType: 'json',
			type: 'post',
			success: function(response){
				console.log(response);

				if (!response.status) {

					if (response.fields.length) {
						response.fields.forEach(function(field){

							$('.form-response').append('<p>' + field.message + '</p>');

						});
					}

					else {

						$('.form-response').html('<p>' + response.message + '</p>');

					}

				} else {

					$('.form-response')
						.addClass('form-response-success')
						.html('<p>' + response.message + '</p>');

				}
			}
		})

	});



	$('.socials a[target="_blank"]').on('click', function(e){
		e.preventDefault();
		window.open( $(this).attr('href'), 'Teilen', 'width=320,height=400' );
	});


});
