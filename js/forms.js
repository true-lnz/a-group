$(document).ready(function() {
	$("#orderForm").on("submit", function(event) {
			event.preventDefault(); 

			var name = document.querySelector("input[name='user_name']").value;
			var phone = document.querySelector("input[name='phone_number']").value;
			var email = document.querySelector("input[name='email_address']").value;
			var details = document.querySelector("input[name='order_details']").value;
			
			var formData = {
				name: name,
				phone: phone,
				email: email,
				details: details
		};

		if (!formData.name || !formData.phone || !formData.email || !formData.details) {
			alert("Пожалуйста, заполните все поля формы.");
			return; 
		}

			$.ajax({
					type: "POST",
					url: "feedback.php",
					data: formData,
					success: function(response) {
							$("#orderForm").hide()
							$('#orderForm')[0].reset(); 
						  $(".modal .modal-postmessage").addClass("visible");
						  $(".modal .modal-postmessage .success").show();
							$(".modal .modal-postmessage .success").show();
					},
					error: function() {
							$("#orderForm").hide()
							$('#orderForm')[0].reset(); 
							$(".modal .modal-postmessage").addClass("visible");
							$(".modal .modal-postmessage .error").show();
					}
			});
	});
});

$(document).ready(function() {
	$("#feedback-form").on("submit", function(event) {
			event.preventDefault(); 

			var name = document.querySelector("input[name='user_name2']").value;
			var phone = document.querySelector("input[name='phone_number2']").value;
			var email = 'Не задан';
			var comment = document.querySelector("input[name='comment']").value;
			
			var formData = {
				name: name,
				phone: phone,
				email: email,
				details: comment
		};
		
		if (!formData.name || !formData.phone || !formData.email || !formData.details) {
			alert("Пожалуйста, заполните все поля формы.");
			return; 
		}

			$.ajax({
				type: "POST",
				url: "feedback.php",
				data: formData,
				success: function(response) {
						$("#feedback-form").addClass("hidden");
						$("#feedback .modal-postmessage").addClass("visible");
						$("#feedback .modal-postmessage .success").show();
						$('html, body').animate({
							scrollTo: $("#feedback").offset().top
					}, 300); 
				},
				error: function() {
						// Добавляем класс, который скрывает форму
						$("#feedback-form").addClass("hidden");
						$("#feedback .modal-postmessage").addClass("visible");
						$("#feedback .modal-postmessage .error").show();
						$('html, body').animate({
							scrollTop: $("#feedback").offset().top - 200
					}, 300); 
				}
		});
	});
});