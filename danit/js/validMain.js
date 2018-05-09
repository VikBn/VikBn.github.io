$('[type="tel"]').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    } else {
        bootstrapValidate(
           '[type="tel"]',
           'email:Enter a valid Phone Number!'
        );
    }
});

bootstrapValidate(
   '[type="email"]',
   'email:Enter a valid E-Mail Address!',
   '[type="tel"]',
   'email:Enter a valid Phone Number!'
);

$("#phone").inputmask("(999) 999-9999");
$("#phone2").inputmask("(999) 999-9999");
