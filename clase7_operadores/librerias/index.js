//sweet alert 
//luxon
//Toastify js 

const fecha = new Date() //crea una nueva fecha
const fechaActual = fecha.toLocaleDateString()//fecha actual
const fechaActual2 = fecha.toLocaleDateString("es-ES") //formato español
const fechaActual3 = fecha.toLocaleDateString("es-ES", {weekday: "long", year: "numeric", month: "long", day: "numeric"}) //formato español con nombres de días y meses

Swal.fire(
    'The Internet?',
    'That thing is still around?',
    'question'
  ) 

Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
}).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
    }
})

Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();

                    