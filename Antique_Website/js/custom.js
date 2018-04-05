
/* Datatables */

$('#mydata').dataTable();


/* To Top Button */

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* Checkout Function */

$(document).ready(function() {

	var navListItems = $('ul.setup-panel li a'),
	allWells = $('.setup-content');

	allWells.hide();

	navListItems.click(function(e)
	{
		e.preventDefault();
		var $target = $($(this).attr('href')),
		$item = $(this).closest('li');

		if (!$item.hasClass('disabled')) {
			navListItems.closest('li').removeClass('active');
			$item.addClass('active');
			allWells.hide();
			$target.show();
		}
	});

	$('ul.setup-panel li.active a').trigger('click');

    // DEMO ONLY //
    $('#activate-step-2').on('click', function(e) {
    	$('ul.setup-panel li:eq(1)').removeClass('disabled');
    	$('ul.setup-panel li a[href="#step-2"]').trigger('click');
    	$(this).remove();
    }) 

    $('#activate-step-3').on('click', function(e) {
    	$('ul.setup-panel li:eq(2)').removeClass('disabled');
    	$('ul.setup-panel li a[href="#step-3"]').trigger('click');
    	$(this).remove();
    })    
});


/* Store Contact Form */

function storedata() {

	localStorage.Name = document.getElementById('name').value;
	localStorage.Email = document.getElementById('email').value;
	localStorage.Telephone = document.getElementById('telephone').value;
	localStorage.Query = document.getElementById('query').value;
}

function storecheckout() {
	localStorage.Title = document.getElementById('dlist').value; 
	localStorage.Name2 = document.getElementById('name2').value;
	localStorage.Email2 = document.getElementById('email2').value;
	localStorage.Telephone2 = document.getElementById('telephone2').value;
	localStorage.Address = document.getElementById('address').value;
	localStorage.County = document.getElementById('dlist2').value; 
	localStorage.Country = document.getElementById('dlist3').value;
	localStorage.Postcode = document.getElementById('postcode').value; 
	localStorage.Cardtype = document.getElementById('dlist4').value;  
	localStorage.ExpMonth = document.getElementById('dlist5').value; 
	localStorage.ExpYear = document.getElementById('dlist6').value;
	localStorage.DeliveryType = document.getElementById('dlist7').value;
	localStorage.Insurance = document.getElementById('dlist8').value;
}